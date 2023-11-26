/// <reference types="vite/client" />
export {};

interface __CONFIG__OTHER__ {
  /* 项目名称 */
  name: string;
  /* 项目版本 */
  version: string;
  /* 项目描述 */
  description: string;
  /* 项目作者 */
  author: string;
  /* 项目仓库地址 */
  repository: string;
  /* 项目文档地址 */
  docs: string;
  /* 项目演示地址 */
  demo: string;
}

interface __CONFIG__API__ {
  /* host */
  host: string;
  /* 端口 */
  port: number;
  /* baseApi */
  baseApi: string;
  /* 接口超时时间 */
  timeout: number;
  /* 接口请求头 */
  headers: {
    [key: string]: string;
  };
}

declare global {
  type __CONFIG__LOG__TYPE__ = 'log' | 'info' | 'warn' | 'error' | 'debug'

  type __CONFIG__LOG__ = boolean | __CONFIG__LOG__TYPE__ | __CONFIG__LOG__TYPE__[]

  interface __CONFIG__ extends Partial<__CONFIG__OTHER__> {
    /* 标签 */
    tags: string;
    /* 标题 */
    title: string;
    /* 标题后缀 */
    titleSuffix?: string;
    /* api */
    api: __CONFIG__API__;
    /* log */
    log: __CONFIG__LOG__;
  }

  interface Window {
    __CONFIG__: __CONFIG__;
  }
}
