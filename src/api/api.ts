import initializeAxios from "./axiosSetup";
import { axiosRequestConfiguration } from "./config";
import { map } from "rxjs/operators";
// import { Observable } from "@reactivex/rxjs/compat";
import { defer, Observable } from "rxjs";
import { AxiosResponse } from "axios";
// https://ichi.pro/de/so-wickeln-sie-axios-mit-typescript-und-react-in-rxjs-ein-118892823169891

const axiosInstance = initializeAxios(axiosRequestConfiguration);

// eslint-disable-next-line
const get = <T>(url: string, queryParams?: any): Observable<T> => {
    return defer(() => axiosInstance.get<T>(url, { params: queryParams })).pipe(map((result: AxiosResponse) => result.data));
};

// const post = <T>(url: string, body: object, queryParams?: any): Observable<T | void> => {
//     return defer(() => axiosInstance.post<T>(url, body, { params: queryParams })).pipe(map((result: AxiosResponse) => result.data));
// };

// const put = <T>(
//   url: string,
//   body: object,
//   queryParams?: object
// ): Observable<T | void> => {
//   return defer(() =>
//     axiosInstance.put<T>(url, body, { params: queryParams })
//   ).pipe(map((result) => result.data));
// };

// const patch = <T>(
//   url: string,
//   body: object,
//   queryParams?: object
// ): Observable<T | void> => {
//   return defer(() =>
//     axiosInstance.patch<T>(url, body, { params: queryParams })
//   ).pipe(map((result) => result.data));
// };

// const deleteR = <T>(url: string, id: number): Observable<T | void> => {
//   return defer(() => axiosInstance.delete(`${url}/${id}`)).pipe(
//     map((result) => result.data)
//   );
// };

export default { get };
