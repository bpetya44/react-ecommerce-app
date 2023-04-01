import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getProducts = async (data) => {
  const response = await axios.get(`${base_url}product`, data);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
};
