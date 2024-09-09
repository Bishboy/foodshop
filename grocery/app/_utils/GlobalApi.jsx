const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "http://192.168.1.189:1337/api",
  
});

 const register = (username, email, password) => axiosClient.post('/auth/local/register',{username:username, email:email, password:password});

 const login = (email, password) => axiosClient.post('/auth/local',{
  identifier: email, password:password
 })

 const addToCart =(data, jwt) => axiosClient.post('/user-carts',data,{
  headers:{
    Authorization:'Bearer'+jwt
  }
 })
const getCategory = () => axiosClient.get("/categories?populate=*");

// const getSliders = () => axiosClient.get('/sliders?populate=*').then(resp=>{
//   return resp.data.data
// })
export default {
  register,
  login,
  addToCart,
  getCategory
};