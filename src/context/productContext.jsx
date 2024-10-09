import { createContext, useContext, useEffect, useReducer } from "react";
import { Reducer } from "../reducer/productReducer";
const ProductsContext= createContext();

const initialState= {
    products:[],
    featuredProducts:[],
    isError:false,
    isLoading:false,
    singleProduct:{},
    isSingleError:false,
    isSingleLoading:false,
    currency:'INR'
}
const ProductsProvider= ({children})=>{
    const [state, dispatch] = useReducer(Reducer, initialState);
    
//to set the currency 
const setCurrency=(currency)=>{
    dispatch({
        type:'SET_CURRENCY',
        payload:currency
      })
}   
const fetchProucts= async( )=>{
    dispatch({
        type:'SET_LOADING'})
    try{
      const res_data= await fetch(import.meta.env.VITE_PRODUCTS);
      const data= await res_data.json();
    //   console.log(data,'from context');
      dispatch({
        type:'SET_PRODUCTS',
        payload:data
      })
      //featured,colors,category,company,description,id,image,name,price;
    }
    catch(e){
        dispatch({type:'API_ERROR'});
        console.log('errro in getting products: ',e);
    }
}

const fetchSingleProduct= async(productId)=>{
    dispatch({
        type:'SET_SINGLE_LOADING'})
    try{
      const res_data= await fetch(`${import.meta.env.VITE_PRODUCT}?id=${productId}`);
      const prod_data= await res_data.json();
      dispatch({
        type:'SET_SINGLE_PRODUCT',
        payload:prod_data
      })
      //featured,colors,category,company,description,id,image,name,price;
    }
    catch(e){
        dispatch({type:'SET_SINGLE_API_ERROR'});
        console.log('error in getting product: ',e);
        
    }
}
    useEffect(() => {
      //thapa sir api for now
      fetchProucts()
    }, []);
    return <ProductsContext.Provider value={{...state,setCurrency,fetchSingleProduct}}>
        {
            children
        }
    </ProductsContext.Provider>
} 
const useProducts=()=>{
    return useContext(ProductsContext);
};

export {ProductsContext, ProductsProvider, useProducts}