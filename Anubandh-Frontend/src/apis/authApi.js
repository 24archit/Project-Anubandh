import axios from "axios";

export const getSignUp = async (formData) => {
  try {
    const config = {
      method: "POST",
      url: `${import.meta.env.VITE_SERVER_LINK}/auth/signup`,
      data: formData,
    };
    const response = await axios(config);
    if (response.status === 200) {
      window.localStorage.setItem("authToken", response.data.authtoken);
    }
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};
export const getLogin = async (formData) => {
  try {
    const config = {
      method: "POST",
      url: `${import.meta.env.VITE_SERVER_LINK}/auth/login`,
      data: formData,
    };
    const response = await axios(config);
    if (response.status === 200) {
      window.localStorage.setItem("authToken", response.data.authtoken);
    }
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};

export const verifyToken = async (authToken) => {
  try {
    const config = {
      method: "GET",
      url: `${import.meta.env.VITE_SERVER_LINK}/auth/verifyauthtoken`,
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("Error during token verification:", error);
    throw error;
  }
}
