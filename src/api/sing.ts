import axios from 'axios';
axios.defaults.baseURL = "http://183.237.67.218:3000";
axios.defaults.withCredentials = true;
export function search(data:any){
    return axios({
        url:`/search?keywords=${data}`,
        method:"get",
    })
}