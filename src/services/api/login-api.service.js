import axios from 'axios';
import {url} from '../../constants/api.constants';
export default class UserLoginService {
    static loginUser = async (payload) => {
        const response = await axios.post(url.apiUrl + '/user/login', payload);
        return response;
    }
}