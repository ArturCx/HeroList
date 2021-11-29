import axios from "axios";

export const getHeroes = async() => {
    const result = await axios.get('http://homologacao3.azapfy.com.br/api/ps/metahumans')
    
    return result.data
} 


