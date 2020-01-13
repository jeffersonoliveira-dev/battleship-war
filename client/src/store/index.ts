import { rootReducer, InitialState, DispatchAction } from './root-reducer'
import {createStore} from 'redux'


export const store = createStore<InitialState, DispatchAction, null, null>(rootReducer)
