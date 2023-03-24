import { CHARACTER } from '@/types/Character';

type ATTRIBUTE = {
  id: string;
  name: string;
  value: string;
}

import API from "../api";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async UPDATE_ATTRIBUTE(id: CHARACTER, attributes: ATTRIBUTE[]): Promise<CHARACTER> {
    const response = await API.put('http://localhost:3000/characters/update', {
      id: id,
      attributes: attributes
    });
    
    return response.data[0];
  }
};