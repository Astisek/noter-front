enum LocalStorageEnum {
  Token = 'token',
}

class LocalStorageManager {
  public get token(): string {
    return localStorage.getItem(LocalStorageEnum.Token) || '';
  }

  public set token(value: string) {
    localStorage.setItem(LocalStorageEnum.Token, value);
  }
}

export const localStorageManager = new LocalStorageManager();
