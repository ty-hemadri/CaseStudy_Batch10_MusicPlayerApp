import axios from 'axios';

const ITEM_API_BASE_URL = "http://localhost:8080/showall";
const ITEM_API_BASE_URL1="http://localhost:8080/getsong";
const ITEM_API_BASE_URL2="http://localhost:8080/add";
const ITEM_API_BASE_URL3="http://localhost:8080/edit";
const ITEM_API_BASE_URL4="http://localhost:8080/delete";
class SongService {

    getSongs(){
        return axios.get(ITEM_API_BASE_URL);
    }
    getItemByTitle(IId){
        return axios.get(ITEM_API_BASE_URL1 + '/' + IId);
    }
    createSong(data){
        return axios.post(ITEM_API_BASE_URL2, data);
    }
    updateSong(data){
        return axios.put(ITEM_API_BASE_URL3, data);
    }
    deleteSong(song_id){
        return axios.delete(ITEM_API_BASE_URL4 + '/' +song_id)
    }
}
export default new SongService()