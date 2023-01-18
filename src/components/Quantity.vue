<template>
    <div>
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
    </div>
</template>

<script>
export default {
    data: () => ({
        counter: 1
    }),
    props: {
        regularPrice: {
            type: Object,
            required: true
        }
    },
    computed: {
        itemsProd() {
            return this.regularPrice;
        }
    },
    methods: {
        plus() {
            this.counter += 1;
            if (this.counter > 5) {
                this.counter = 5;
            }

            this.$store.dispatch('setQuantity', {
                id: this.itemsProd.id,
                counter: this.counter,
                price: this.itemsProd.regular_price.value
            });

            this.$emit('pruductSum',  this.itemsProd.sumProduct);

        },
        minus() {
            this.counter -= 1;
            if (this.counter < 1) {
                this.counter = 1;
            }
            this.$store.dispatch('setQuantity', {
                id: this.itemsProd.id,
                counter: this.counter,
                price: this.itemsProd.regular_price.value
            });

            this.$emit('pruductSum',  this.itemsProd.sumProduct);

        },
    },

    mounted() {
        this.counter = this.itemsProd.quantity;
    }
}
</script>

<style scoped lang="scss">
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