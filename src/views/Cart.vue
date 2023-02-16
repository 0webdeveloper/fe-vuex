<template>
    <div class="cartPage">
        <h1>This is an cart page</h1>
        <div class="container">
            <div class="addedGoods" v-if="inCart.length">
                <cart-items v-for="item in inCart"
                            :key="item.id"
                            :product="item"
                            class="shopping-cart-section"
                >
                </cart-items>
            </div>
            <div v-else><h2>No products in the cart. </h2></div>
            <div class="totalSum">
                <p>Общая сумма: {{ sumTotal }} $</p>
                <router-link to="/order">
                    <my-button>Перейти к оформлению</my-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItems from "@/components/CartItems.vue";

export default {

    components: {
        CartItems
    },
    computed: {
        ...mapGetters({ inCart: 'shopStore/inCart' }),
        sumTotal() { // считаем общую сумму товаров
            if (this.inCart.length) {
                const arr = this.inCart.map(item => +item.sumProduct);
                const total = arr.reduce((sum, item) => {
                    return (sum + item);
                });
                return total.toFixed(2);
            }
        }
    }
}
</script>

<style lang="scss">
.cartPage {
    h1 {
        padding: 30px 0 50px;
    }
}

.totalSum {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
        margin-right: 20px;
    }
}
</style>