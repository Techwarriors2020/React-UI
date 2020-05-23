import axios from 'axios';
import {url} from '../../constants/api.constants';
export default class UserRegistrationService {
    static registerUser = async (payload) => {
        const response = await axios.post(url.apiUrl + '/user/register', payload);
        return response;
    }
}