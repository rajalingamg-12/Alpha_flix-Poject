import instance from "./axiosInstance";

export const getSubscription = () => {
  return instance.get("/subscription/get").then((res) => res.data);
};
