import Brands from '@/db/brands.json';
import Products from '@/db/products.json';


const state = () => ({
    brands: [],
    products: [],
    cart: JSON.parse(localStorage.getItem('cart') || '[]')
});

const getters = {
    allBrands: state => state.brands,
    allProducts: state => state.products,
    checkCart: state => state.cart
};

const mutations = {
    changeBrands(state, payload) {
        state.brands = payload
    },
    changeProducts(state, payload) {
        state.products = payload
    },
    sortBrands(state, code) {
        if (code !== 'All') {
            let id = +code.at(-1);
            state.products = Products.filter((item) => item.brand == id);
        } else {
            return state.products = Products;
        }
    },
    putToCart(state, payload) {
        if(state.cart.length) {
            const itemArr = [];
            state.cart.map(item => itemArr.push(item.id)); // пушим id товаров в новый массив

            if(!itemArr.includes(payload.id)) { // если нет в массиве таких id
                state.cart.push(payload);
            }
        } else {
            state.cart.push(payload);
        }
        localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    deleteProduct(state, id) {
        state.cart = state.cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }
};

const actions = {
    fetchAllBrands({commit}) {
        commit('changeBrands', Brands)
    },
    fetchAllProducts({commit}) {
        commit('changeProducts', Products)
    },
    sortBrands({commit}, code) {
        commit('sortBrands', code);
    },
    putProductToCart({commit}, product) {
        commit('putToCart', product);
    },
    deleteProduct({commit}, id) {
        commit('deleteProduct', id);
    }
};

export default{
    state,
    getters,
    mutations,
    actions
}