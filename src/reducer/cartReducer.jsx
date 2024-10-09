
export const reducer = (state, action) => {
    switch (action.type) {

        case 'ADD_TO_CART':
            const { id, color, amount, product } = action?.payload;

            //check if product already exist or not
            let productExist = state.cart.find(curelem => {
                return curelem.id === id + color;
            })

            if (productExist) {
                let updatedProduct = state.cart.map(curelem => {
                    let newamt;
                    if (curelem.id === id + color) {
                        newamt = curelem.amount + amount;

                        if (newamt >= curelem.max) {
                            newamt = curelem.max;
                        }
                        return {
                            ...curelem,
                            amount: newamt
                        }
                    }
                    else {
                        return curelem
                    }
                });
                return {
                    ...state,
                    cart: updatedProduct
                }
            }
            else {
                let cartProduct = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    image: product.image[0].url,
                    price: product.price,
                    max: product.stock,
                }
                return {
                    ...state,
                    cart: [...state.cart, cartProduct]
                }
            };

        case "SET_INCREMENT":
            const increProd = state.cart.map(curelem => {
                if (curelem.id === action.payload) {
                    let newamt = curelem.amount + 1;
                    if (newamt >= curelem.max) {
                        newamt = curelem.max
                    }
                    return {
                        ...curelem,
                        amount: newamt
                    }
                }
                else {
                    return curelem
                }
            })
            return {
                ...state,
                cart: increProd
            }
        case "SET_DECREMENT":
            let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let decAmount = curElem.amount - 1;

                    if (decAmount <= 1) {
                        decAmount = 1;
                    }

                    return {
                        ...curElem,
                        amount: decAmount,
                    };
                } else {
                    return curElem;
                }
            });
            return { ...state, cart: updatedProduct };

        case "REMOVE_ITEM":
            let updatedCart = state.cart.filter(
                (curItem) => curItem.id !== action.payload
            );
            return {
                ...state,
                cart: updatedCart,
            };
        // to empty or to clear to cart
        case "EMPTY_CART":
            {
                return {
                    ...state,
                    cart: [],
                };
            }
        case "CART_ITEM_PRICE_TOTAL":
            let { total_item, total_price } = state.cart.reduce(
                (accum, curElem) => {
                    let { price, amount } = curElem;

                    accum.total_item += amount;
                    accum.total_price += price * amount;

                    return accum;
                },
                {
                    total_item: 0,
                    total_price: 0,
                }
            );
            return {
                ...state,
                total_item,
                total_price,
            };
        default:
            return state;
    }
};