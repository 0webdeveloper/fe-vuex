<template>
    <ul class="products__list">
        <li
            v-for="(brand, idx) in allBrands"
              :key="brand.id"
              :brand = "brand"
             >
        <a
            href="#"
            @click.prevent="sortBrands(idx, brand.code)"
            :class="{ active: idx === isActive }"
        >{{ brand.title }}</a>
        </li>
    </ul>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data: () => ({
        isActive: null
    }),
    computed: {
      ...mapGetters({ allBrands: 'shopStore/allBrands' }),
    },
    methods: {
        ...mapActions({ fetchAllBrands: 'shopStore/fetchAllBrands' }),
        sortBrands(idx, code) {
            this.isActive = idx;
            this.$store.dispatch('shopStore/sortBrands', code)
        }
    },
    mounted() {
        this.fetchAllBrands();
    }
}
</script>

<style scoped lang="scss">
.products__list {
    position: sticky;
    top: 0;
}
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