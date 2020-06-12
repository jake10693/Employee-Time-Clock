import axios from "axios";

export default {
  registerUser: (data) => {
    return axios.post("/api/auth/register", data);
  },
  authenticateUser: (data) => {
    return axios.post("/api/auth/", data);
  },
  getUserData: (data, config) =>{
    return axios.post("/api/auth/user", data, config)
  },
  clockInOut: (data) => {
    return axios.post("/api/newclockin", data)
  }, 
  createNewLocation: (data) => {
    return axios.post('/api/createnewlocation', data)
  },
  getOneLocation: (data, config) => {
    return axios.get('/api/getonelocationlocation', data, config)
  },
  newEmployee: (data) => {
    return axios.post('/api/newemployee', data)
  },
  getOneEmployee: (data, config) => {
    return axios.get('/api/getoneemployee', data, config)
  },
  createNewRole: (data) => {
    return axios.post('/api/createnewrole', data)
  },
  getAllRoles: (data, config) => {
    return axios.get('/api/getallroles', data, config)
  },
  getOneRole: (data, config) => {
    return axios.get('/api/getonerole', data, config)
  }
};