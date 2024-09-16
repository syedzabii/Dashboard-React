import axios from "axios";

export default axios.create({
  baseURL: `http://localhost:${import.meta.env.VITE_APP_PORT_NODE}/api/v1`,
});
