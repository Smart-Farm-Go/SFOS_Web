// 获取类型
export const getType = (value: any, lower = false) => ((type: string) => lower ? type.toLowerCase() : type)(Object.prototype.toString.call(value).slice(8, -1));

// 判断类型
export const isType = (value: any, type: string) => getType(value, true) === type.toLowerCase();

// 合并选项
export function mergeOptions<T = any, V = any>(option: T, ...options: V[]): T {
  const result = Object.assign({}, option || {}) as T;
  for (const option of options) {
    if (typeof option === 'object' && option !== null) {
      for (const key of Object.keys(option)) {
        if (Array.isArray(option[key])) {
          result[key] = (result[key] || []).concat(option[key]);
        } else if (typeof option[key] === 'object' && option[key] !== null) {
          result[key] = mergeOptions(result[key] || {}, option[key]);
        } else {
          result[key] = option[key];
        }
      }
    }
  }
  return result;
}
