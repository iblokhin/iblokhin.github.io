import axios, { AxiosError } from 'axios';
import {IFetchRequestData} from '../../interfaces/common';


class ApiService {
    private makeFetchRequest({ url, method, data }: IFetchRequestData) {
        axios.defaults.headers = {
            'Content-Type': 'application/json',
        };

        return new Promise((resolve, reject) => {
            axios({ url, method, data })
                .then(res => {
                    resolve(res.data ? res.data.data || res.data : {});
                })
                .catch(error => this.checkErrorStatus(error, reject));
        });
    }

    public get(data: IFetchRequestData) {
        return this.makeFetchRequest({
            ...data,
            method: 'GET'
        });
    }

    public post(data: IFetchRequestData) {
        return this.makeFetchRequest({
            ...data,
            method: 'POST'
        });
    }

    public put(data: IFetchRequestData) {
        return this.makeFetchRequest({
            ...data,
            method: 'PUT'
        });
    }

    public patch(data: IFetchRequestData) {
        return this.makeFetchRequest({
            ...data,
            method: 'PATCH'
        });
    }

    public delete(data: IFetchRequestData) {
        return this.makeFetchRequest({
            ...data,
            method: 'DELETE'
        });
    }

    private checkErrorStatus(
        error: AxiosError,
        reject: (error: AxiosError) => void
    ) {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    reject(error);
                    break;
                case 403:
                    reject(error);
                    break;
                case 404:
                    reject(error);
                    break;
                case 400:
                    if (error.response.data && error.response.data.message) {
                        console.log('error', error.response.data.message);
                    }
                    reject(error.response.data);
                    break;
                case 502:
                    reject(error);
                    break;
                case 503:
                    reject(error);
                    break;
                default:
                    reject(error);
            }
        } else {
            reject(error);
        }
    }
}

const apiService = new ApiService();
export default apiService;
