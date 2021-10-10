import axios from "axios";

export function setRepository(data) {
  return axios.post('/set-repository', data);
}