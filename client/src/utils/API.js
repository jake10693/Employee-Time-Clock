import axios from 'axios';



export default {
    saveStartTime: (data) => {
        return axios.post('/api/clockin', data)
    },

}