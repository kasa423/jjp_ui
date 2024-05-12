import request from "@/request/index.ts";

// 获取用户信息
export const getUserInfo = (params: any) => {
  return request.get("/user/info", { params });
}


type LoginUser = {
  username: string;
  password: string;
}

// 登录
export const login = (params: LoginUser) => {
  return request.post("/verify/login", params);
}

export const logout = () => {
  return request.post("/verify/logout");
}

export const hello = () => {
  return request.get("/verify/hello");
}