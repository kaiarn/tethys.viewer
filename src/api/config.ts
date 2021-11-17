import { AxiosRequestConfig } from "axios";
import * as qs from "qs";

export const axiosRequestConfiguration: AxiosRequestConfig = {
    responseType: "text",
    headers: {
        // "Content-Type": "text/plain",
        "Content-Type": "application/x-www-form-urlencoded",
        // "Content-Type": "application/x-www-form-urlencoded",
        // credentials: "same-origin",
        // "Access-Control-Allow-Credentials": "true",
        // "Access-Control-Allow-Origin": "*",
    },
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
};
