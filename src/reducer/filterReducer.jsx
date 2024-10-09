export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FILTER_PRODUCTS':
          const pricearr= action.payload.map(curelem=>{
            return curelem.price;
          })
          let maxprice= Math.max(...pricearr);
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters:{
                  ...state.filters,
                  maxPrice:maxprice,
                  price:maxprice,
                }
            }
        case 'SET_GRID_VIEW':
            return {
                ...state,
                grid_view: true,
            }
        case 'SET_LIST_VIEW':
            return {
                ...state,
                grid_view: false,
            }
        case 'SET_SORTING_VALUE':
            const { name, value } = action.payload;
            console.log(value, name);

            return {
                ...state,
                sorting_value: value
            }
        case "SORTING_PRODUCTS":

            let newsorteddata;
            let tempsortedprod = [...state.all_products];

            switch (state.sorting_value) {
                case 'lowest':
                    newsorteddata = tempsortedprod.sort((a, b) => a.price - b.price);
                    break;
                case 'highest':
                    newsorteddata = tempsortedprod.sort((a, b) => b.price - a.price);
                    break;
                case 'a-z':
                    newsorteddata = tempsortedprod.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'z-a':
                    newsorteddata = tempsortedprod.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                default:
                    newsorteddata = tempsortedprod;
            }
            // console.log('sorted',newsorteddata);
            
            return {
                ...state,
                filter_products: [...newsorteddata]
            }

        case 'SET_FILTER_VALUE':
            let prop = action.payload;
            let newfilters = {
                ...state.filters,
                [prop.name]: prop.value
            }

            return {
                ...state,
                filters: newfilters
            }
            case "FILTER_PRODUCTS":
                let { all_products } = state;
                let tempFilterProduct = [...all_products];
              
                const { text, category, company, color, price } = state.filters;
              
                if (text) {
                  tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text.toLowerCase());
                  });
                }
                else if (category !== "all") {
                  tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.category === category
                  );
                }
                else if (company !== "all") {
                  tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
                  );
                }
          
                else if (color !== "all") {
                  tempFilterProduct = tempFilterProduct.filter((curElem) =>
                    curElem.colors.includes(color)
                  );
                }
                else if (price === 0) {
                  tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.price == price
                  );
                } 
                else {
                  tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.price <= price
                  );
                }
                // else{
                //    tempFilterProduct=[...all_products];
                // }
                
              
                return {
                  ...state,
                  filter_products:tempFilterProduct,
                };           

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.minPrice,
                },
            };
        default:
            return state;
    }
}