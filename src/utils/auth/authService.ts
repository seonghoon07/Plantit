import { customAxios } from "../customAxios";

const getUserData = async () => {
  try {
    const res = await customAxios.get("/user");
    return res.data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const authorizeAccess = async (code: string) => {
  try {
    const response = await customAxios.post(
      `/auth/google?code=${code}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    console.log(response);

    const { accessToken: newAccessToken, refreshToken } = response.data.data;

    if (newAccessToken && refreshToken) {
      localStorage.setItem("accessToken", newAccessToken);
      localStorage.setItem("refreshToken", refreshToken);
    }

    if (localStorage.getItem("accessToken") && localStorage.getItem("refreshToken")) {
      const { email, level, name, percent } = await getUserData();

      const user = { email, level, name, percent };
      localStorage.setItem("user", JSON.stringify(user));

      window.location.replace("/home");
    }

    return true;
  } catch (error) {
    console.error("Authorization Error:", error);
    return error;
  }
};
