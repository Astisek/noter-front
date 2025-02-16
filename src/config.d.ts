declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_SERVER_BASE_URL: string;
      SERVER_BASE_URL: string;
    }
  }
}

export {};
