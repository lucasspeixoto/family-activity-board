import { Action, createReducer, on } from '@ngrx/store';

import { loadMessagesSuccess } from './message.actions';
import { Message } from '@app/shared/models/message.model';

export interface MessageState {
  messages: Message[];
}

const initialState: MessageState = {
  messages: [],
};

const _messageReducer = createReducer(
  initialState,
  on(loadMessagesSuccess, (state: MessageState, { payload }) => {
    return {
      messages: [...payload],
    };
  })
);

export const messageReducer = (
  state: MessageState | undefined,
  action: Action
): MessageState => _messageReducer(state, action);
