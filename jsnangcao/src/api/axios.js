// Nơi cấu hình base cho axios
import axios from 'axios';

// Khởi tạo cấu hình axios cho toàn bộ project
const apiAxios = axios.create({
    baseURL: 'https://6295d089810c00c1cb6851e2.mockapi.io/'
});

export default apiAxios;
