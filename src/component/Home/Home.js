//import { CgMouse } from "react-icons/all";
import React, { useEffect } from 'react'
// import Product from './ProductCart.js';
import{getProduct} from "../../actions/prductAction.js";
import {useSelector,useDispatch} from "react-redux";
import Loader from "../layout/Loader/Loader.js"
import  './Abc.css';
import MetaData from "../layout/MetaData.js";
import ProductCart from './ProductCart.js';

// const product={
//    name:"Blue Tshirt",
//    images:[{url:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}
//   ],
//   price:"3000",
//   _id:"abcde"

// }
const Home = () => {
  const dispatch=useDispatch();

  const {loading,error,products,productCount}=useSelector(state=>state.products);
  //console.log(products,"Home");

  useEffect(()=>{
     dispatch(getProduct());
  },[dispatch]);
  return (
    <>{

      loading?<Loader/>: <>
      <MetaData title="Home page"></MetaData>
       <div className="banner">
         <p>Welcome to Ecommerce</p>
         <h1>Find Amazing Products Below</h1>
         <a href="#container">
             <button>
                 Scroll 
             </button>
         </a>
       </div>
      
       <h2 className="homeHeading">Feature Products</h2>
       <div className="container" id="container">
         {
           products && products.map((product,id)=>
           <ProductCart product={product}  key={id}/>
           )
         }
         
         </div>
       
 
     </>
    }
    
    
    </>
   
  )
}

export default Home