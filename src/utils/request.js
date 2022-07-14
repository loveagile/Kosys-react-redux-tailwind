import axios from "axios";
import { toast } from "react-toastify";
import httpStatus from "http-status";

import { PATH } from "../consts";

const SERVER_BASE_URL = process.env.SERVER_BASE_URL || "http://localhost:8080";

const Request = async (
  url,
  method = "GET",
  data = {},
  isTokenIncluded = true,
  isAPI = true
) => {
  try {
    let requestURL = url;
    let headers = {
      "Content-Type": "application/json",
    };

    if (isAPI) {
      requestURL = `${SERVER_BASE_URL}/api/v1/${requestURL}`;
    } else {
      requestURL = `${SERVER_BASE_URL}/${requestURL}`;
    }

    if (isTokenIncluded) {
      headers.authorization = `BEARER ${localStorage.getItem("token")}`;
    }

    const response = await axios({
      url: requestURL,
      method,
      data,
      headers,
    });

    const responseData = response.data;

    if (responseData.message) {
      toast.success(responseData.message);
    }

    return responseData;
  } catch (error) {
    console.log(error);
    let message = "";
    if (error.code === "ERR_NETWORK") {
      message = "Network Error! Please check your internet connection!";
    } else {
      if (error.response.status === httpStatus.UNAUTHORIZED) {
      }
      message = error.message;
    }
    toast.error(message);

    return false;
  }
};

export default Request;
