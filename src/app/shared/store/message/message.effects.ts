import * as fromApp from '@app/app.state';
import * as MessageActions from '@sharedSt/message/message.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Message } from '@sharedMd/message.model';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Injectable()
export class MessageEffects {
  public loadMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MessageActions.loadMessages),
        tap(() => {
          this.afs
            .collection<Message>(`messages`)
            .valueChanges()
            .subscribe({
              next: messages => {
                this._store.dispatch(
                  MessageActions.loadMessagesSuccess({ payload: messages })
                );
              },
            });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    public readonly afs: AngularFirestore,
    private readonly _store: Store<fromApp.AppState>
  ) {}
}
