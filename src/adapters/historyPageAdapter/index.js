import axios from "axios";

export function getHistory(data) {
  return axios.post('/get-history', data);
}