export const setLocalStorage = (key: string, value: object) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const userAuth = JSON.parse(localStorage.getItem('auth') as string);

export const removeAuth = () =>  localStorage.removeItem("auth");