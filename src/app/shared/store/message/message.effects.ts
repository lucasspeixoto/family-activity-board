import * as fromApp from '@app/app.state';
import * as MessageActions from '@sharedSt/message/message.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Message } from '@app/shared/models/message.model';
import { Store } from '@ngrx/store';

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
            /* .pipe(
              map(action =>
                action.map(actionData => {
                  const messageData = actionData.payload.doc.data();
                  const messageId = actionData.payload.doc.id;
                  console.log(messageData);
                  const message = {
                    ...messageData,
                    messageId,
                  };
                  return messageData;
                })
              )
            ) */
            .subscribe(messages => {
              console.log(messages);
              this._store.dispatch(
                MessageActions.loadMessagesSuccess({ payload: messages })
              );
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
