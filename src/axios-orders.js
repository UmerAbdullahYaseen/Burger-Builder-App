import axios from 'axios';

const instance = axios.create({

    baseURL: 'https://burgermaker-with-react-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

export default instance;