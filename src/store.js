import { combineReducers } from 'redux';
import { anotherComponent } from './another-component/another-component-reducer'
import { infoComponent } from './info/info-component-reducer'

export const rootReducer = combineReducers({
    anotherComponent,
    infoComponent
});