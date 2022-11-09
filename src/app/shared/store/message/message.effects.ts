import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromApp from '@app/app.state';

import * as MessageActions from '@sharedSt/message/message.actions';

import { Message } from '@sharedMd/message.model';

@Injectable()
export class MessageEffects {
  public loadMessage$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(MessageActions.loadMessages),
        tap(() => {
          this._angularFirestore
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
    private readonly _actions$: Actions,
    public readonly _angularFirestore: AngularFirestore,
    private readonly _store: Store<fromApp.AppState>
  ) {}
}
