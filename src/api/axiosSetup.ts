import axios, { AxiosRequestConfig, AxiosInstance, AxiosPromise } from "axios";

const initialization = (config: AxiosRequestConfig): AxiosInstance => {
    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    const axiosInstance = axios.create(config);

    /*
        Add default headers, interceptors etc..
    */

    return axiosInstance;
};

export default initialization;
