export const log = (...args) =>
  __DEBUG__ ? console.log(...args) : undefined;

export const logError = (...args) =>
  __DEBUG__ ? console.error(...args) : undefined;

export const renderIf = (test, component) =>
  test ? component : undefined;

export const classToggler = (config) =>
  Object.keys(config).filter(key => config[key]).join(' ');

export const map = (list, ...args) =>
  Array.prototype.map.apply(list, args);

export const filter = (list, ...args) =>
  Array.prototype.filter.apply(list, args);

export const reduce = (list, ...args) =>
  Array.prototype.reduce.apply(list, args);

export const clearLocalStorageToken = () => localStorage.removeItem('token')

export const photoToDataUrl = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.addEventListener('load', () => {
      resolve(reader.result);
    });

    reader.addEventListener('error', () => {
      reject(reader.error);
    });

    return file ? reader.readAsDataURL(file) : reject(new Error('USEAGE ERROR: Must provide a file'));
  });
}

export const cookieDelete = key => document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`

export const cookieFetchAll = () => {
  return Object.assign(...document.cookie.split(';')
    .map(cookie => {
      let [key, value] = cookie.split('=')
      return { [key.trim()]: value }
    }))
}

export const cookieFetch = key => {
  let cookies = Object.assign(...document.cookie.split(';')
    .map(cookie => {
      let [key, value] = cookie.split('=')
      return { [key.trim()]: value }
    }))
  return cookies[key]
}