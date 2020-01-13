import { Action, Reducer } from 'redux'

export interface InitialState {
    // have to put this
}


export const InitialState : InitialState  = {
  // initial state
}

export interface DispatchAction extends Action {
   //
   payload: Partial<InitialState>;
}

export enum ActionType {
  // types here for the string
}


export const rootReducer: Reducer<InitialState, DispatchAction> = ( state, action ) => {
  return InitialState
}
