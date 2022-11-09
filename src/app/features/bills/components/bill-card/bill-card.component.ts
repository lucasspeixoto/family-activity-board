import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { first } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as fromApp from '@app/app.state';

import { User } from '@authMd/user.model';

import { getTotalBillAmount } from '@billsSt/bills.selectors';
import { AddEditBillComponent } from '@billsC/add-edit-bill/add-edit-bill.component';
import { Bill } from '@billsMd/bills.model';
import { BillService } from '@billsS/bill.service';

import { ConfirmationComponent } from '@sharedC/confirmation/confirmation.component';
import { DialogService } from '@sharedS/dialog/dialog.service';
import { getDateStatus } from '@sharedH/date.helper';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillCardComponent implements OnInit {
  public readonly deleteTitle = 'Excluir Tarefa';
  public readonly deleteSubtitle = 'Deseja realmente excluir esta tarefa ?';

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
  @Input()
  public user!: User;

  constructor(
    private readonly _store: Store<fromApp.AppState>,
    private readonly _dialog: MatDialog,
    private _dialogRef: MatDialogRef<ConfirmationComponent>,
    private readonly _billService: BillService,
    private readonly _dialogService: DialogService
  ) {}

  public ngOnInit(): void {
    this.dateStatus = getDateStatus(this.bill.date);
  }

  public handleDeleteBill(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this._dialogRef = this._dialog.open(ConfirmationComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this._dialogService.getDeleteDialogData(
        this.user.uid!,
        this.deleteTitle,
        this.deleteSubtitle
      ),
    });

    this._dialogRef.componentInstance.confirmClicked
      .pipe(first())
      .subscribe(() => {
        this._billService.deleteBillHandler(this.user.uid!, this.bill.billId!);
      });
  }

  public handleEditBill(): void {
    this._dialog.open(AddEditBillComponent, {
      minWidth: '45%',
      data: {
        type: 'edit',
        bill: this.bill,
      },
    });
  }

  public handleMarkAsPaid(): void {
    this._billService.handleMarkAsPaid(this.bill, this.user.uid!);
  }
}
