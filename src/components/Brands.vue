<template>
    <ul class="products__list">
        <brands-items
            v-for="(brand, idx) in allBrands"
              :key="brand.id"
              :brand = "brand"
             />
<!--        <a-->
<!--            href="#"-->
<!--            @click.prevent="sortBrands(idx, brand.code)"-->
<!--            :class="{ active: idx === isActive }"-->
<!--        >{{ brand.title }}</a>-->
    </ul>
</template>

<script>
import BrandsItems from "@/components/BrandsItems.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    data: () => ({

    }),
    components: {
        BrandsItems
    },
    computed: {
      ...mapGetters(['allBrands'])
    },
    methods: {
        ...mapActions(['fetchAllBrands']),
        // sortBrands(idx, code) {
        //     this.isActive = idx;
        //     this.$store.dispatch('sortBrands', code)
        // }
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
</style>