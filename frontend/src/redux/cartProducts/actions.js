export const CART_PRODUCT_SUCCESS = 'CART_PRODUCT_SUCCESS'
export const CART_PRODUCT_LOADING = "CART_PRODUCT_LOADING"


export const getCartProductSucces = (paylod) => ({
    type: CART_PRODUCT_SUCCESS,
    paylod
})

export const getCartProductLoading = () => ({
    type: CART_PRODUCT_LOADING
})