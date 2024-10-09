
export const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            }
        case 'SET_CURRENCY':
            // console.log('curr got in reudcer',action.payload);
            return {
                ...state,
                currency: action.payload
            }
        case 'SET_PRODUCTS':
            const featuredResult = action.payload.filter(elem => {
                return elem.featured === true;
            })
            return {
                ...state,
                products: [...action.payload],
                featuredProducts: [...featuredResult],
                isLoading: false,
                currency: state.currency
            }
            case 'API_ERROR':
                return {
                    ...state,
                    isError: true,
                    isLoading: false
                };
                //single product reducer function cases
        case 'SET_SINGLE_LOADING':
           return{
            ...state,
            isSingleLoading:true,
           }
        case 'SET_SINGLE_PRODUCT':
            // console.log('product detials :',action.payload);
            return {
                ...state,
                singleProduct:action?.payload,
                isSingleLoading: false,
                isSingleError:false
            }
        case 'SET_SINGLE_API_ERROR':
            return {
                ...state,
                isSingleError: true,
                isSingleLoading: false
            };
    }

    return state;
}