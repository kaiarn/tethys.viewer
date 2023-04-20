import { AxiosRequestConfig } from "axios";
import { stringify } from "qs";

// let headers: AxiosRequestConfig['headers'] =
// headers['Content-Type'] = 'multipart/form-data';

export const axiosRequestConfiguration: AxiosRequestConfig = {
    // responseType: "text",
    // headers: {
    //     // "Content-Type": "text/plain",
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     // "Content-Type": "application/x-www-form-urlencoded",
    //     // credentials: "same-origin",
    //     // "Access-Control-Allow-Credentials": "true",
    //     // "Access-Control-Allow-Origin": "*",
    // },
    headers: {
        //: AxiosHeaders | Partial<RawAxiosHeaders & MethodsHeaders & CommonHeaders> | undefined
        "Content-Type": "application/x-www-form-urlencoded",
    },
    // headers: {
    // 	"Content-type": "application/json; charset=UTF-8",
    // },
    // paramsSerializer: {
    //     indexes: null, // by default: false
    // },

    paramsSerializer: {
        serialize: (params: Record<string, number>) => {
            return stringify(params, { arrayFormat: "repeat" });
        },
    },
};
