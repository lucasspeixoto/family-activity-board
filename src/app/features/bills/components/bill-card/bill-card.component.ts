import * as fromApp from '@app/app.state';

import { Component, Input, OnInit } from '@angular/core';
import { deleteBill, editBill } from '@billsSt/bills.actions';
import { getDateStatus, getNextMonthDateFromString } from '@billsH/filters';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AddEditBillComponent } from '@billsC/add-edit-bill/add-edit-bill.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Bill } from '@billsM/bills.model';
import { ConfirmationComponent } from '@sharedC/confirmation/confirmation.component';
import { DateService } from '@sharedS/date/date.service';
import { first } from 'rxjs/operators';
import { getTotalBillAmount } from '@billsSt/bills.selectors';
import { getUser } from '@authSt/auth.selectors';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { User } from '@authM/user.model';

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

  //* Dados de usuário
  public user!: User;
  public readonly userId$ = this._store
    .select(getUser)
    .pipe(tap(user => (this.user = user!)));

  constructor(
    private readonly _store: Store<fromApp.AppState>,
    public readonly dialog: MatDialog,
    public dialogRef: MatDialogRef<ConfirmationComponent>,
    public readonly afs: AngularFirestore,
    private readonly _dateService: DateService
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
        data: this.user.uid,
      },
    });

    this.dialogRef.componentInstance.confirmClicked
      .pipe(first())
      .subscribe(() => {
        this._store.dispatch(
          deleteBill({
            url: `users/${this.user.uid}/bills`,
            billId: this.bill.billId!,
          })
        );
      });
  }

  public handleEditBill(): void {
    this.dialog.open(AddEditBillComponent, {
      minWidth: '45%',
      data: {
        type: 'edit',
        bill: this.bill,
      },
    });
  }

  public handleMarkAsPaid(): void {
    const { spent } = this.bill; // 1 - Fixo | 2 - Variável

    if (spent === 1) {
      const updatedDate = this._dateService.formatDate(
        new Date(getNextMonthDateFromString(this.bill.date))
      );
      const newBill = {
        ...this.bill,
        date: updatedDate,
      };
      this._store.dispatch(
        editBill({
          url: `users/${this.user.uid}/bills`,
          bill: { ...newBill },
        })
      );
    } else if (spent === 2) {
      this._store.dispatch(
        deleteBill({
          url: `users/${this.user.uid}/bills`,
          billId: this.bill.billId!,
        })
      );
    }
  }
}
