<template>
  <div class="cartPage">
    <h1>This is an cart page</h1>

      <div class="container">
          <div class="addedGoods" v-if="inCart.length">
              <cart-items v-for="item in inCart"
                   :key="item.id"
                   :product="item"
                   class="shopping-cart-section">
<!--                  <img class="main-img-product" :src="require(`@/assets${item.image}`)" alt="">-->
<!--                  <div>{{ item.title }}</div>-->

<!--                  <div>{{ item.regular_price.value }} $</div>-->
<!--                  <Quantity :regularPrice="item.regular_price.value" @prodCount="prodCount"/>-->

<!--                  <div class="deleteFromCart" @click="removeProduct(item.id)">-->
<!--                      <img :src="require('@/assets/trash-svgrepo-com.svg')" alt="">-->
<!--                  </div>-->
              </cart-items>
          </div>
          <div v-else> <h2>Нет товаров </h2></div>
          <div class="totalSum">
              <p>Общая сумма:</p>
              <router-link to="/order"><my-button>Перейти к оформлению</my-button></router-link>
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
      ...mapGetters(['inCart'])
    },
    methods: {
        // removeProduct(id) {
        //     this.$store.dispatch('deleteProduct', id);
        // },
        // prodCount(count, sum) {
        //     console.log(count, sum);
        //     // this.$store.commit('setCount', count, sum);
        // }
    }
}
</script>

<style lang="scss">
.cartPage {
    h1 {
        padding: 30px 0 50px;
    }
}
//.shopping-cart-section {
//    border-bottom: 1px solid var(--blue-white);
//    display: flex;
//    align-items: center;
//    justify-content: space-between;
//    .main-img-product {
//        max-width: 150px;
//    }
//}
//.deleteFromCart {
//    svg {
//        max-width: 25px;
//    }
//}
//.deleteFromCart {
//    width: 30px;
//    cursor: pointer;
//}
.totalSum {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
        margin-right: 20px;
    }
}
</style>