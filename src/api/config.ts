import { AxiosRequestConfig } from "axios";
import * as qs from "qs";

export const axiosRequestConfiguration: AxiosRequestConfig = {
    responseType: "text",
    headers: {
        "Content-Type": "application/json",
    },
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
};
