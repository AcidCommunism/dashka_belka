import axios from 'axios';
import { logger } from '../../logger';

export const getFortune = async () => {
    try {
        const response = await axios.get('http://yerkee.com/api/fortune');
        return response.data.fortune;
    } catch (e) {
        logger.error(e);
    }
};
