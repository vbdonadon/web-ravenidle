import { CHARACTER } from '@/types/Character';

import API from "../api";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async GET_CHARACTER(): Promise<CHARACTER> {
    const response = await API.put('http://localhost:3000/characters/update');
    
    return response.data[0];
  }
};