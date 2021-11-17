import axios, { AxiosRequestConfig, AxiosInstance, AxiosPromise } from "axios";

const initialization = (config: AxiosRequestConfig): AxiosInstance => {
    //axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    delete axios.defaults.headers.common["X-Requested-With"];
    // axios.defaults.withCredentials = true;
    // const token = document.head.querySelector('meta[name="csrf-token"]');
    // if (token) {
    //     axios.defaults.headers.common["X-CSRF-TOKEN"] = token.innerHTML;
    // }
    const axiosInstance = axios.create(config);

    /*
        Add default headers, interceptors etc..
    */

    return axiosInstance;
};

export default initialization;
