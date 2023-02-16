<template>
    <div class="products__list">
        <products-item
            v-for="product in allProducts"
            :key="product.id"
            :product="product"
            class="products__card">
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
        ...mapGetters({
            allProducts: 'shopStore/allProducts',
            inCart: 'shopStore/inCart'
        }),
    },
    methods: {
        ...mapActions({
            fetchAllProducts: 'shopStore/fetchAllProducts',
            putProductToCart: 'shopStore/putProductToCart'
        }),
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

</style>