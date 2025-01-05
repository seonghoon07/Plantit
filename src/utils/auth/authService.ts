import { customAxios } from "../customAxios";

const getUserData = async () => {
  try {
    const res = await customAxios.get("/user")
    return res.data.data
  } catch (err) {
    console.log(err)
  }
}

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
      const { email, level, name, percent} = await getUserData()
      localStorage.setItem("email", email);
      localStorage.setItem("level", level);
      localStorage.setItem("name", name);
      localStorage.setItem("percent", percent);
      window.location.replace("/home");
    }

    return true;
  } catch (error) {
    return error;
  }
};