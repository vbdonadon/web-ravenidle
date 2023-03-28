export type IUpdateAttribute = {
  id: string;
  attributes: IAttribute[]
}

type IAttribute = {
  name: string;
  value: number;
}

import API from "../api";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async UPDATE_ATTRIBUTE({ id, attributes }: IUpdateAttribute): Promise<IUpdateAttribute> {
    const response = await API.put('http://localhost:3000/characters/update/attribute', {
      "id": id,
      "attributes": attributes
    });
    
    return response.data[0];
  }
};