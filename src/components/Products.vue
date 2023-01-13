<template>
    <div class="products__list">

        <products-item
            v-for="(product, idx) in allProducts"
            :key="product.id"
            :product="product"
            class="products__card">
<!--            <img-->
<!--                :src="require(`@/assets${product.image}`)"-->
<!--                :alt="product.title"-->
<!--                class="product__image"-->
<!--            />-->
<!--            <div class="products__content">-->
<!--                <p class="products__content__title">{{ product.title }}</p>-->
<!--                <p class="products__content__brand">brand {{ product.brand}}</p>-->
<!--                <p class="products__content__price">-->
<!--                    {{ product.regular_price.value}}-->
<!--                    <span>{{ product.regular_price.currency}}</span>-->
<!--                </p>-->

<!--                <my-button-->
<!--                    ref="btn"-->
<!--                    @click.native="addToCart(product, idx)"-->
<!--                    :class="{checkCart: product.btnDisabled}"-->
<!--                    :disabled="product.btnDisabled"-->
<!--                >{{ product.buttonName }}</my-button>-->
<!--            </div>-->
        </products-item>
    </div>
</template>

<script>
import productsItem from "@/components/ProductsItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    components: {
        productsItem
    },
     computed: {
        ...mapGetters(['allProducts', 'inCart']),
    },
    methods: {
        ...mapActions(['fetchAllProducts', 'putProductToCart']),
        // addToCart(prod) {
        //     // const addFieldsToProd = {buttonName: "В корзине", btnDisabled: true}
        //     // Object.assign(prod, addFieldsToProd);
        //
        //     prod.buttonName = 'В корзине';
        //     prod.btnDisabled = true;
        //     this.putProductToCart(prod);
        //     // this.$store.dispatch('putProductToCart', prod);
        // }
    },
    mounted() {
        this.fetchAllProducts();
        // this.$set(this.product_data, 'quantity', 1)
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

</style>