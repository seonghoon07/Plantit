import { customAxios } from "../customAxios";

export const authorizeAccess = async (code: String) => {
  try {
    const response = await customAxios.post(
      `/auth/google?code=${code}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    console.log(response)

    const { accessToken: newAccessToken, refreshToken } = response.data.data;

    if (newAccessToken && refreshToken) {
      localStorage.setItem("accessToken", newAccessToken);
      localStorage.setItem("refreshToken", refreshToken);
    }

    if (localStorage.getItem("accessToken") && localStorage.getItem("refreshToken")) {
      window.location.replace("/home");
    }

    return true;
  } catch (error) {
    return error;
  }
};