<template>
    <div>
        <img class="main-img-product" :src="require(`@/assets${productItem.image}`)" alt="">
        <div>{{ productItem.title }}</div>

        <div>{{ productItem.regular_price.value }} $</div>

        <Quantity :regularPrice="productItem" @pruductSum="prodCount"/>

        <div>{{ setLoadSum }} $</div>

        <div class="deleteFromCart" @click="removeProduct(productItem.id)">
            <img :src="require('@/assets/trash-svgrepo-com.svg')" alt="">
        </div>
        {{totalSum}}
    </div>
</template>

<script>
import Quantity from "@/components/Quantity.vue";
import { mapGetters } from "vuex";

export default {
    name: "CartItems",
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    data: ()=>({
        prodSumLoad: 1
    }),
    components: {
        Quantity
    },
    computed: {
        ...mapGetters(['counterInItem']),
        productItem() {
            return this.product;
        },
        setLoadSum() {
            return this.prodSumLoad = this.productItem.sumProduct;
        },
        totalSum() {

        }
    },
    methods: {
        removeProduct(id) {
            this.$store.dispatch('deleteProduct', id);
        },
        prodCount(sum) {
            // console.log(sum);
        },
    },
    // mounted() {
    //     // this.counter = this.counterInItem;
    // }
}
</script>

<style scoped lang="scss">
.shopping-cart-section {
    border-bottom: 1px solid var(--blue-white);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .main-img-product {
        max-width: 150px;
    }
}

.deleteFromCart {
    svg {
        max-width: 25px;
    }
}

.deleteFromCart {
    width: 30px;
    cursor: pointer;
}






//
//.quantity {
//    position: relative;
//    display: inline-block;
//    margin-right: 30px;
//
//    input {
//        width: 28px;
//        height: 29px;
//        padding: 5px;
//    }
//}
//
//.quantity__button {
//    position: absolute;
//    top: 0;
//    right: -14px;
//    width: 15px;
//    height: 15px;
//    cursor: pointer;
//    display: flex;
//    justify-content: center;
//    align-items: center;
//
//    &.minus {
//        bottom: 0;
//        top: auto;
//    }
//}
//
//.sumPrice {
//    display: inline-block;
//}




</style>