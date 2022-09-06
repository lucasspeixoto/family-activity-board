import { DialogConfig } from '@sharedMd/dialog-config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  public getDeleteDialogData(userId: string): DialogConfig {
    const config = {
      title: 'Excluir Conta',
      subtitle: 'Deseja realmente excluir está conta ?',
      cancelButtonTitle: 'Cancelar',
      confirmationButtonTitle: 'Confirmar',
      data: userId,
    };

    return config;
  }
}
