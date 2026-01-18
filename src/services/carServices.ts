import axios from "axios";


export const deleteCar = (id: number) => {
  return axios.delete(`/cars/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};