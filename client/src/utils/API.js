import axios from 'axios';



export default {
    saveStartTime: () => {
        return axios.post('startTime/api', startTime)
    },

    saveEndTime: () => {
        return axios.post('endTime/api', endTime)
    }
}