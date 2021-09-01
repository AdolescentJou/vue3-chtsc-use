import { message } from "antd";
import axios from "axios";
import { User } from "../axiosTest/reducer/reducer";

export type Method = "GET" | "POST" | "PUT" | "DELETE";
export type ResponseType =
  | "arraybuffer"
  | "blob"
  | "document"
  | "json"
  | "text"
  | "stream";

export interface AxiosRequest {
  baseURL?: string;
  url?: string;
  data?: any;
  params?: any;
  method?: Method;
  headers?: any;
  timeout?: number;
  responseType?: ResponseType;
}

export interface AxiosResponse {
  data: any;
  headers: any;
  request?: any;
  status: number;
  statusText: string;
  config: AxiosRequest;
}

export interface CustomResponse {
  readonly status: boolean;
  readonly message: string;
  data: any;
  origin?: any;
}

const axiosCreate = (request: AxiosRequest) => {
  return axios.create(request);
};
//创建全局axios
export const axiosInstance = axiosCreate({ baseURL: "http://localhost:3000" });

//配置axios拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("这里是发出请求的拦截器");
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("这是接收请求的拦截器");
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
  }
);

/**
 *
 * @param url
 * @param params
 * @returns
 */
export function get(url: string, params = {}) {
  return new Promise<Array<User>>((resolve, reject) => {
    axiosInstance
      .get(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        message.error("获取用户数据失败");
        reject(err);
      });
  });
}

export function post(url: string, params = {}) {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function deleteA(url: string, params = {}) {
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function put(url: string, params = {}) {
  return new Promise((resolve, reject) => {
    axiosInstance
      .put(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
