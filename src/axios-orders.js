import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-c838f.firebaseio.com/"
});

export default instance;
