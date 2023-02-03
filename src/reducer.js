export const initialState = {
    basket: [],

};
//selector highly use on prodcuction env(loop and return together) putting your selecter inside reducer is proffesional way.
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
            ...state,
            basket:[...state.basket, action.item],
            };

        //now we listen the remove from baskt action from CheckoutProduct
        case "REMOVE_FROM_BASKET":
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id);
                let newBasket = [...state.basket];

                if (index >= 0) {
                    newBasket.splice(index, 1)

                } else {
                    console.warn(
                        `Can't remove product (id: ${action.id}) as its not in basket!`
                    )
                }
            return {
            ...state,
            basket: newBasket
            }

            default:
                return state;
        }
    }


export default reducer;