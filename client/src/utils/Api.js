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
  verifyLocation: (id) => {
    return axios.get(`/api/location/${id}`)
  },
  retrieveEmployees: (locId) => {
    return axios.get(`/api/location/employees/${locId}`)
  },
  clockInOut: (body) => {
    return axios.post("/api/clockin", body)
  }, 
  createNewLocation: (body) => {
    return axios.post('/api/location', body)
  },
  getOneEmployee: (id) => {
    return axios.get(`/api/employee/${id}`)
  },
  getAllLocations: (id) => {
    return axios.get(`/api/location/company/${id}`)
  }
};