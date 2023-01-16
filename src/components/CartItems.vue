<template>
    <div>
        <img class="main-img-product" :src="require(`@/assets${productItem.image}`)" alt="">
        <div>{{ productItem.title }}</div>

        <div>{{ productItem.regular_price.value }} $</div>
        <!--        <Quantity :regularPrice="productItem.regular_price.value" @prodCount="prodCount"/>-->


        <div class="quantity">
            <input
                type="text"
                maxlength="2"
                min="0"
                max="99"
                value=""
                v-model="counter"
            >
            <button
                @click="plus"
                class="quantity__button plus">+
            </button>
            <button
                @click="minus"
                class="quantity__button minus">-
            </button>
        </div>

        <div class="deleteFromCart" @click="removeProduct(productItem.id)">
            <img :src="require('@/assets/trash-svgrepo-com.svg')" alt="">
        </div>
    </div>
</template>

<script>
// import Quantity from "@/components/Quantity.vue";
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
        counter: null
    }),
    components: {
        // Quantity
    },
    computed: {
        ...mapGetters(['counterInItem']),
        productItem() {
            return this.product;
        }
    },
    methods: {
        removeProduct(id) {
            this.$store.dispatch('deleteProduct', id);
        },
        prodCount(count, sum) {
            console.log(count, sum);
            // this.$store.commit('setCount', count, sum);
        },
        plus() {
            this.counter += 1;
            if (this.counter > 5) {
                this.counter = 5;
            }
            // this.$set(this.product, 'quantity', this.counter)
            this.$store.dispatch('setQuantity', {
                id: this.productItem.id,
                counter: this.counter,
                price: this.productItem.regular_price.value
            });
            // this.$emit('prodCount', this.counter, +(this.counter * this.regularPrice).toFixed(2));
        },
        minus() {
            this.counter -= 1;
            if (this.counter < 1) {
                this.counter = 1;
            }
            this.$store.dispatch('setQuantity', {
                id: this.productItem.id,
                counter: this.counter,
                price: this.productItem.regular_price.value
            });
            // this.$emit('prodCount', this.counter, +(this.counter * this.regularPrice).toFixed(2));
        }
    },
    mounted() {
        this.counter = this.counterInItem;
    }
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







.quantity {
    position: relative;
    display: inline-block;
    margin-right: 30px;

    input {
        width: 28px;
        height: 29px;
        padding: 5px;
    }
}

.quantity__button {
    position: absolute;
    top: 0;
    right: -14px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &.minus {
        bottom: 0;
        top: auto;
    }
}

.sumPrice {
    display: inline-block;
}




</style>