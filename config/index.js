// export const isLocalServer = process.env.ENV_API == 'local' ? true : false;
export const isLocalServer = false;

export const API_URL = isLocalServer
  ? 'http://localhost:8000'
  : 'http://43.201.193.138';
