import axios from "axios";

// const API_BASE_URL = "http://localhost:8080/api";
const API_BASE_URL = "https://rent-vehicle-backend.vercel.app/api";

export const getVehicleTypes = async (wheels) => {
  const response = await axios.get(`${API_BASE_URL}/vehicle-types/${wheels}`);
  return response.data;
};

export const getVehicles = async (typeId) => {
  const response = await axios.get(`${API_BASE_URL}/vehicles/${typeId}`);
  return response.data;
};

export const submitBooking = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/bookings`, data);
  return response.data;
};
