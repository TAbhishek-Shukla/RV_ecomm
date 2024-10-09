import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/filterReducer";
import { useProducts } from "./productContext";
const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    filtered:[],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
      text: "",
      category: "all",
      company: "all",
      color: "all",
      maxPrice: 0,
      price: 0,
      minPrice: 0,
    },
  };
  

const FilterProvider = ({ children }) => {
    const { products } = useProducts();
    const [state, dispatch] = useReducer(reducer, initialState);

    //to set the grid view
    const setGridView = () => {
        return dispatch({ type: 'SET_GRID_VIEW' });
    }
    //to set the list view
    const setListView = () => {
        return dispatch({ type: 'SET_LIST_VIEW' });
    }

    const sorting = (e) => {
        dispatch({ type: 'SET_SORTING_VALUE', payload: e.target })
    }
    const updateFilterValue = (e) => {
        // console.log('updata filter value method is called');
        
        const { name, value } = e.target;
        dispatch({ type: 'SET_FILTER_VALUE', payload: { name, value } })
    }
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
      };

    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS" });
        dispatch({ type: "FILTER_PRODUCTS" });

    }, [products, state.sorting_value, state.filters]);
    useEffect(() => {
        dispatch({ type: 'SET_FILTER_PRODUCTS', payload: products });
    }, [products]);
    return <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters }}>
        {children}
    </FilterContext.Provider>
}

const useFilter = () => {
    return useContext(FilterContext);
}

export { FilterContext, FilterProvider, useFilter };