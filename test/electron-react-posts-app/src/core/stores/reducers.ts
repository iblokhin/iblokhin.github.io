import {combineReducers, Reducer, AnyAction} from 'redux';
import {routerReducer} from 'react-router-redux';
import {IGlobalStore} from '../interfaces/common';

// Stores
import home from './home/reducer';

const appReducer: Reducer<IGlobalStore, AnyAction> = combineReducers({
    router: routerReducer,
    home,
});

const rootReducer = (state: any, action: AnyAction) => {
    return appReducer(state, action);
};

export default rootReducer;
