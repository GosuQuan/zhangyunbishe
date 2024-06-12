import axios from 'axios'
const baseURL = "http://localhost:9000/"
export const companyInsert = async (company) => {
    const data = await axios.post(baseURL + "company/insert", company).then(res => res.data.data).catch(err => console.log(err))
    return data;
}
export const companyDelete = async (companyId) => {
    const data = await axios.delete(baseURL + "company/delete?id=" + companyId).then(res => res.data.data).catch(err=>console.log(err))
    return data;
}
export const companyUpdate = async  (company) => {
    const data = await axios.put(baseURL + "company/update", company).then(res=>res.data).catch(err => console.log(err))
    return data;
}
export const companySelect = async() => {
    const data = await axios.get(baseURL + "company/list").then(res=>res.data).catch(err => console.log(err))
    return data
}
export const searchCompany = async (param) => {
    if(!param){return companySelect()}
    let data = await axios.get(baseURL + "company/list?id=" + param).then(res => res.data).catch(err => console.log(err))
    if(!data){
        data =  await axios.get(baseURL + "company/list?companyName=" + param).then(res => res.data).catch(err => console.log(err))
    }
    return data;
}