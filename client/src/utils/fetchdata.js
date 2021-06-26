import axios from 'axios';

export const getDataAPI =async (url) =>{
    const res= await axios.get(`/api/${url}`)
    return res;

}

export const postDataAPI =async (url,post)=>{
    const res= await axios.post(`/api/${url}`,post)
    return res;
}


export const deleteDataAPI =async (url)=>{
    const res= await axios.delete(`/api/${url}`)
    return res;

}
export const patchDataAPI =async (url,post)=>{
    const res= await axios.patch(`/api/${url}`,post)
    return res;

}