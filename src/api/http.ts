import wretch from 'wretch';

const endpoint: string = import.meta.env.VITE_API_URL;

const http = async (url: string) => {
  const API_URL = `${endpoint}/api${url}`;

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: token,
  };

  return wretch(API_URL)
    .headers(headers)
    .catcher(401, async () => {
      return wretch(`${endpoint}/auth/refresh`)
        .headers(headers)
        .post()
        .json(async ({ token }) => {
          console.log(token);
        });
    });
};

export default http;
