const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "http://192.168.1.189:1337/api",
});

const register = (username, email, password) =>
  axiosClient.post("/auth/local/register", {
    username: username,
    email: email,
    password: password,
  });

const login = (email, password) =>
  axiosClient.post("/auth/local", {
    identifier: email,
    password: password,
  });

  //hello jesus loves you

const  addToCart = (data, jwt) =>
  axiosClient.post("/user-carts", data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

const getCategory = () => axiosClient.get("/categories?populate=*");

const getCategoryList = () =>
  axiosClient.get("/categories?populate=*").then((resp) => {
    console.log(resp.data.data);
    return resp.data.data;
  });

const getProductsByCategory = (category) =>
  axiosClient
    .get("/products?filters[categories][name][$in]=" + category + "&populate=*")
    .then((resp) => {
      return resp.data.data;
    });

const getAllProduct = () =>
  axiosClient.get("/products?populate=*").then((resp) => {
    return resp.data.data.slice(0, 8);
  });

 const getCartItems = (userId, jwt) =>
   axiosClient.get(
    //  `/user-carts?filters[userId][$eq]=${userId}&[populate][products][populate][images][populate][0]=url`,
    `/user-carts?filters[userId][$eq]=${userId}&[populate][products][populate][images][populate][0]=url`,
     {
       headers: {
         Authorization: `Bearer ${jwt}`,
       },
     }
   ).then(resp=>{
       const data = resp.data.data;
       console.log(data);
      
       const cartItemsList = data.map((item, index) => ({
         name: item.attributes.products?.data[0].attributes.name,
         quantity: item.attributes.quantity,
         amount: item.attributes.amount,
         image:item?.attributes?.products?.data[0]?.attributes.images.data[0].attributes.url,
         actualPrice:item.attributes.products?.data[0].attributes.price,
         id:item.id

       }));
    return cartItemsList;
   })

   const deleteCartItems = (id, jwt) =>
     axiosClient.delete(`/user-carts/${id}`, {
       headers: {
         Authorization: `Bearer ${jwt}`,
       },
     });


// const getCartItems = async (userId, jwt) => {
//   try {
//     const response = await axiosClient.get(
//       `/user-carts?filters[userId][$eq]=${userId}&[populate][products][populate][images][populate][0]=url`,
//       {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       }
//     );
//     const data = response.data.data;
//     const cartItemsList = data.map((item, index) => ({
//       name: item?.attributes?.products?.data[0]?.attributes.name,
//       quantity: item.attributes.quantity,
//       amount: item?.attributes?.products?.data[0]?.attributes.images.data[0].attributes.url,
//       actualPrice:item.attributes.Products?.data[0].attributes.price,
//       id:item.id
//        }));
//     return cartItemsList;
//   } catch (error) {
//     console.error("Error fetching cart items:", error);
//     throw error; // Optionally rethrow the error for higher-level handling
//   }
// };

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
  getProductsByCategory,
  getCartItems,
  deleteCartItems,
};
