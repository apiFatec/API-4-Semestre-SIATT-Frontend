import axios from "axios";

export interface ApiCall {
  baseURL: string;
}

export const TOKEN_TYPE = "bearer";

const axiosErrorsInterceptor = (req: any) => {
  if (req?.response?.status === 401 || req?.response?.status === 400) {
      alert('Usuário não encontrado, verifique se os dados estão corretos!');
      localStorage.setItem('auth-store', '');
      localStorage.setItem('notifications-store', '');
      localStorage.setItem('rides-store', '');
      window.location.reload();   
  }
}

const request = async (params: any) => {
  try {
    
    axios.interceptors.response.use(
      (response) => response,
      axiosErrorsInterceptor
    );

    return axios({
      ...params,
      headers: {
        ...params?.headers,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

const apis = ({ baseURL }: ApiCall) => ({
  get: (props: any | {}) =>
    request({
      baseURL,
      ...props,
      method: "GET",
    }),
  post: (props: any) =>
    request({
      baseURL,
      ...props,
      method: "POST",
    }),
  put: (props: any) =>
    request({
      baseURL,
      ...props,
      method: "PUT",
    }),
  patch: (props: any) =>
    request({
      baseURL,
      ...props,
      method: "PATCH",
    }),
  delete: (props: any) =>
    request({
      baseURL,
      ...props,
      method: "DELETE",
    }),
});


export default apis;