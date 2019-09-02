import {RouterState} from 'react-router-redux';
import {IHomeStoreEntity} from './home';
import {IConnectionsReducer} from '../../pages/connections/interfaces';
import {IMessagesReducer} from '../../pages/messages/interfaces';

export interface IServerErrorField {
    field: string;
    defaultMessage: string;
}

export interface IServerError {
    status: number;
    error: string;
    message: string;
    errors: string | IServerErrorField[];
}

export interface ISagaRequestArgs {
    apiRequest: (data: any) => Promise<any>;
    successCallback?: (data: any) => void;
    failureCallback?: (error: IServerError) => void;
}

export interface IActionObject<P = null> {
    type: string;
    payload?: P;
}

export type IActionCreator<D = null> = (data?: D) => IActionObject<D>;

export interface IActionHandlers<S> {
    [key: string]: IActionHandler<S>;
}

export type IActionHandler<S, P = null> = (state: S, payload?: P) => S;

export interface IGlobalStore {
    router: RouterState;
    home: IHomeStoreEntity;
}

export interface IRoute {
    path: string;
    name: string;
    component: any;
    exact?: boolean;
}

export interface IFetchRequestData {
    url: string;
    method?: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
    data?: any;
}