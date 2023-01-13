<template>
    <div class="product-item">
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
                @click.native="addToCart(product)"
                :class="{checkCart: product.btnDisabled}"
                :disabled="product.btnDisabled"
            >{{ product.buttonName }}</my-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductsItem",
    props: ['product'],
    methods: {
        addToCart(prod) {
            // const addFieldsToProd = {buttonName: "В корзине", btnDisabled: true}
            // Object.assign(prod, addFieldsToProd);

            prod.buttonName = 'В корзине';
            prod.btnDisabled = true;
            // this.putProductToCart(prod);
            this.$store.dispatch('putProductToCart', prod);
        }
    },
    mounted() {
        this.$set(this.product, 'quantity', 1) // добавляем каждому товару реактивное свойство
    }
}
</script>

<style scoped>
.products__content {
    padding: 15px;
}
.products__card {
    box-shadow: 0 4px 16px 0 rgb(0 0 0 / 12%);
    border-radius:3px;
    position: relative;
    overflow: hidden;
    max-width: 350px;
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

.checkCart{
    background: #c38b7d;
    color: #fff;
}
</style>