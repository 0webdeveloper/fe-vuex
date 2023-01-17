<template>
        <li>
            <a
                href="#"
                @click.prevent="sortBrands(compBrand.code)"
                :class="{ active: isActive }"
            >{{ compBrand.title }}</a>
        </li>
</template>

<script>
export default {
    data: () => ({
        isActive: null
    }),
    props: {
        brand: {
            type: Object
        }
    },
    computed: {
        compBrand() {
            return this.brand;
        }
    },
    methods: {
        sortBrands(code) {
            this.isActive = true;
            this.$store.dispatch('sortBrands', code)
        }
    },
    mounted() {



    }
}
</script>

<style scoped>
li {
    list-style: none;
    line-height: 2rem;
    border-bottom: 1px solid #a9a9a9;
}

a {
    text-decoration: none;
    color: #252525;
}
a.active {
    color: red;
}
</style>