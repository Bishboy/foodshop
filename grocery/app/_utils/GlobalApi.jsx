
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
 
const getCategoryList = () => axiosClient.get("/categories?populate=*").then(resp=>{
  console.log(resp.data.data);
  return resp.data.data
  
});

const getProductsByCategory = (category) => axiosClient.get('/products?filters[categories][name][$in]='+category+'&populate=*')

//  const getAllProduct = () => axiosClient.get("/products?populate=*").then((resp) => {
//      return resp.data.data;
//    });
 
  const getAllProduct = async()=>{
    try {
      const response = await axiosClient.get("/products?populate=*");
      return response.data.data
    } catch (error) {
      console.log("this is a bad error");
      
      
    }
  }

 
 


// const getSliders = () => axiosClient.get('/sliders?populate=*').then(resp=>{
//   return resp.data.data
// })
export default {
  register,
  login,
  addToCart,
  getCategory,
  getCategoryList,
  getAllProduct,
  getProductsByCategory
};