import { createAction, props } from '@ngrx/store';

import { Message } from '@sharedMd/message.model';

export enum MessageActions {
  LOAD = '[Message] Load System Messages',
  LOAD_SUCCESS = '[Message] Load System Messages Success',
}

export const loadMessages = createAction(MessageActions.LOAD);

export const loadMessagesSuccess = createAction(
  MessageActions.LOAD_SUCCESS,
  props<{ payload: Message[] }>()
);
