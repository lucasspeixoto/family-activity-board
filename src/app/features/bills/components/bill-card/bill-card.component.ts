import * as fromApp from '@app/app.state';

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Bill } from '@billsM/bills.model';
import { ConfirmationComponent } from '@sharedC/confirmation/confirmation.component';
import { deleteBill } from '../../store/bills.actions';
import { getDateStatus } from '@billsH/filters';
import { getTotalBillAmount } from '@billsSt/bills.selectors';
import { getUserUid } from '@app/authentication/store/auth.selectors';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { tap } from 'rxjs';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss'],
})
export class BillCardComponent implements OnInit {
  public readonly billTypeIcons: Record<number, string> = {
    1: 'account_balance',
    2: 'credit_card',
    3: 'school',
    4: 'fastfood',
  };

  @Input()
  public bill!: Bill;

  public dateStatus!: number;

  public readonly percent!: number;
  public billsAmount$ = this._store.select(getTotalBillAmount);

  public userId!: string;
  public readonly userId$ = this._store
    .select(getUserUid)
    .pipe(tap(uid => (this.userId = uid!)));

  constructor(
    private readonly _store: Store<fromApp.AppState>,
    public readonly dialog: MatDialog,
    public dialogRef: MatDialogRef<ConfirmationComponent>,
    public readonly afs: AngularFirestore
  ) {}

  public ngOnInit(): void {
    this.dateStatus = getDateStatus(this.bill.date);
  }

  public handleDeleteBill(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        title: 'Excluir Conta',
        subtitle: 'Deseja realmente excluir está conta ?',
        cancelButtonTitle: 'Cancelar',
        confirmationButtonTitle: 'Confirmar',
        data: this.userId,
      },
    });

    this.dialogRef.componentInstance.confirmClicked
      .pipe(take(1))
      .subscribe(() => {
        this._store.dispatch(
          deleteBill({
            url: `users/${this.userId}/bills`,
            billId: this.bill.billId!,
          })
        );
      });
  }
}
