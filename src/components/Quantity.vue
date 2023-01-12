<template>

    <div>


    <div class="quantity" >
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
            class="quantity__button plus">+</button>
        <button
            @click="minus"
            class="quantity__button minus">-</button>
    </div>
        <div class="sumPrice">{{sumPrice}} $</div>
    </div>
</template>

<script>
export default {
    data:()=>({
        counter: 1
    }),
    props: {
        regularPrice: {
            type: Number,
            required: true
        }
    },
    methods: {
        plus() {
            this.counter += 1;
            if (this.counter > 99) {
                return this.counter = 99;
            }
        },
        minus() {
            this.counter -= 1;
            if(this.counter < 1) {
                this.counter = 1;
            }
        }
    },
    computed: {
        sumPrice() {
           return (this.counter * this.regularPrice).toFixed(2);
        }
    }
}
</script>


<style scoped lang="scss">
.quantity {
    position: relative;
    display: inline-block;
    margin-right: 30px;
input{
    width: 28px;
    height: 29px;
    padding:5px;
}
}
.quantity__button {
    position: absolute;
    top:0;
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