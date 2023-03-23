import { CHARACTER } from '@/types/Character';
import { AxiosResponse } from 'axios';

import API from "../api";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async GET_CHARACTER(): Promise<CHARACTER> {
    const response = await API.get('http://localhost:3000/characters/find');
    
    return response.data[0];
  }
};