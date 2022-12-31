<template>
    <div class="products__list">
        <div
            v-for="(product, idx) in allProducts"
            :key="product.id"
            class="products__card">
            <img
                :src="require(`@/assets${product.image}`)"
                :alt="product.title"
                class="product__image"
            />
            <div class="products__content">
                <p class="products__content__title">{{ product.title }}</p>
                <p class="products__content__brand">brand {{ product.brand}}</p>
                <p class="products__content__price">
                    {{ product.regular_price.value}}
                    <span>{{ product.regular_price.currency}}</span>
                </p>


                <my-button
                    ref="btn"
                    @click.native="addToCart(product, idx)"
                    :class="{inCart: idx === statusBtn}"
                >{{ (idx+1 === product.id) ? buttonName ='В корзине' : 'Купить'  }}</my-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data: () => ({
        buttonName: 'Купить',
        statusBtn: null
    }),
    computed: {
        ...mapGetters(['allProducts', 'checkCart']),
        setButton() {
                    return this.$store.getters.checkCart[0].buttonName
        }
    },
    methods: {
        ...mapActions(['fetchAllProducts']),
        addToCart(prod, idx) {
            prod.buttonName = 'В корзине';
            this.$store.dispatch('putProductToCart', prod);
            this.statusBtn = idx;


            // if(this.statusBtn === idx) {
            //     let item = this.allProducts[idx];
            //     item.buttonName = 'В корзине';
            //     this.$set(this.allProducts, idx, item);
            // }
        }
    },
    mounted() {
        this.fetchAllProducts();
    }
}
</script>

<style lang="scss" scoped>
.products__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 15px;
    grid-auto-flow: dense;
}
.products__content {
    padding: 15px;
}
.products__card {
    box-shadow: 0 4px 16px 0 rgb(0 0 0 / 12%);
    border-radius:3px;
    position: relative;
    overflow: hidden;
    max-width: 350px;
    img {

    }
}
.products__card::before {
    content: '';
    position: absolute;
    z-index: -1;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    filter: blur(8px);
    background-blend-mode: exclusion;
}

.products__card::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.65;
    border: 1px solid #fff;
    background: #fff;
}
.product__image {
    width: 100%;
    object-fit: cover;
}
.products__content {
    line-height: 2;
}

.inCart{
    background: red;
}
</style>