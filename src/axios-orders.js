import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-mtburger-default-rtdb.firebaseio.com/'
});

export default instance;