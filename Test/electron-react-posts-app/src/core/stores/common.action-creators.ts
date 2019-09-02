import { PENDING, SUCCESS, FAILURE } from './common.action-types';

export const startProcessActionCreator = (type: string) => ({
  type: `${type}${PENDING}`
});

export const successProcessActionCreator = (type: string, payload: any) => ({
  type: `${type}${SUCCESS}`,
  payload
});

export const failureProcessActionCreator = (type: string, payload: any) => ({
  type: `${type}${FAILURE}`,
  payload
});
