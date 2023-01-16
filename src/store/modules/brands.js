import Brands from '@/db/brands.json';
import Products from '@/db/products.json';
import {createLogger} from "vuex";
import Vue from 'vue'


const state = () => ({
    brands: [],
    products: [],
    cart: JSON.parse(localStorage.getItem('cart') || '[]')
});

const getters = {
    allBrands: state => state.brands,
    allProducts: state => state.products,
    inCart: state => state.cart,
    counterInItem: (state, getters) => {
        for (let i of getters.inCart) {
            return i.quantity;
        }
    }
};

const mutations = {
    changeBrands(state, payload) {
        state.brands = payload
    },
    changeProducts(state, payload) {

        const idInCart = state.cart.map(item => item.id); // id товаров в корзине

        for(let item of payload) {
            if(idInCart.includes(item.id)) {
                item.buttonName = 'В корзине';
                item.btnDisabled = true;
            } else {
                item.buttonName = 'Купить';
                item.btnDisabled = false;
            }
        }
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
        if(state.cart.length) { // если в массиве уже есть элемент
            const itemArr = [];
            state.cart.map(item => itemArr.push(item.id)); // собираем все id товаров в массив

            if(!itemArr.includes(payload.id)) { // если нет в массиве таких id, кладем в корзину
                state.cart.push(payload);
            }
        } else {
            state.cart.push(payload); // если корзина пуста, кладем первый товар
        }
        localStorage.setItem('cart', JSON.stringify(state.cart)) // содержимое корзины в localStorage
    },
    deleteProduct(state, id) {
        state.cart = state.cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    modifyQuantity(state, payload) {
        state.cart.forEach(item => {
            if (item.id == payload.id) {
                item.quantity = payload.counter; // меняем счетчик
                const newPrice = +(payload.counter * payload.price).toFixed(2);
                item.sumProduct = newPrice; // добавляем новое свойство в объект, увеличенной ценой
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        })
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
    },
    setQuantity({commit}, obj) {
        commit('modifyQuantity', obj);
    }
};

export default{
    state,
    getters,
    mutations,
    actions
}