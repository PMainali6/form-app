import { ILocalStorageKeys } from '../constants/contants';

export const scrollToTop = (top = 0, left = 0) => {
  const scrollableElement = document.querySelector('.scrollable');
  if (scrollableElement) {
    scrollableElement.scrollTo({
      top,
      left,
      behavior: 'smooth',
    });
  }
};

export const extractSearchURLParams = (
  searchParams: URLSearchParams,
): Record<string, string> => {
  const params: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};

export const getLocalStorage = (item: ILocalStorageKeys) => {
  return JSON.parse(window.localStorage.getItem(item));
};

export const setLocalStorage = (key: ILocalStorageKeys, value: boolean) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const uppercaseHypenString = (str: string): ILocalStorageKeys => {
  return str.split(' ').join('-').toUpperCase();
};

export const isNull = (val: string | number) => val === null;

export const isNotNull = (val: string | number) => !isNull(val);

export const isUndefined = (val: string | number) => val === undefined;

export const isEmpty = (val: string | number) =>
  isNull(val) || isUndefined(val) || val === '';

export const isNotEmpty = (val: string | number) => !isEmpty(val);
