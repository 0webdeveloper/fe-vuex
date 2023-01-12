<template>
  <div class="cartPage">
    <h1>This is an cart page</h1>

      <div class="container">
          <div class="addedGoods">
              <div v-for="item in inCart"
                   :key="item.id"
                   class="shopping-cart-section">
                  <img class="main-img-product" :src="require(`@/assets${item.image}`)" alt="">
                  <div>{{ item.title }}</div>

                  <div>{{ item.regular_price.value }} $</div>
                  <Quantity :regularPrice="item.regular_price.value" />

                  <div class="deleteFromCart" @click="removeProduct(item.id)">
                      <img :src="require('@/assets/trash-svgrepo-com.svg')" alt="">
                  </div>
              </div>
          </div>
          <div class="totalSum">
              <p>Общая сумма:</p>
              <router-link to="/order"><my-button>Перейти к оформлению</my-button></router-link>
          </div>
      </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Quantity from '@/components/Quantity';
export default {
    data: ()=>({

    }),
    components: {
        Quantity
    },
    computed: {
      ...mapGetters(['inCart'])
    },
    methods: {
        removeProduct(id) {
            this.$store.dispatch('deleteProduct', id);
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
.totalSum {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
        margin-right: 20px;
    }
}
</style>