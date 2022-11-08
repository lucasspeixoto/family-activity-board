import { DialogConfig } from '@sharedMd/dialog-config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  public getDeleteDialogData(
    userId: string,
    title: string,
    subtitle: string
  ): DialogConfig {
    const config = {
      title,
      subtitle,
      cancelButtonTitle: 'Cancelar',
      confirmationButtonTitle: 'Confirmar',
      data: userId,
    };

    return config;
  }
}
