import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

/**
 *
 * @return {Promise<Array<pokemon>>}
 */
export const getPokemons = async () =>{

  try{
    const {data} = await axios.get(`${API_BASE_URL}/pokemon?limit=151`);
    return data.results;

  }catch (e) {
    console.error(e);
    throw new Error(e);
  }

}