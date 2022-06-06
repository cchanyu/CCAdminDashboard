import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://japanesedrill-backend.herokuapp.com/'
})

export default instance;