<template>
    <div class="shop">
        <div class="container content-container">
            <aside>
                <Brands/>
            </aside>
            <main>
                <Products/>
            </main>
        </div>

    </div>
</template>

<script>
import Brands from '@/components/Brands.vue';
import Products from '@/components/Products.vue';

export default {
    name: 'Shop',
    data: () => ({}),
    computed: {

    },
    components: {
        Brands,
        Products
    },

}
</script>

<style lang="scss">
footer {
    background: var(--blue-white);
    min-height: 150px;
}

.content-container {
    display: grid;
    grid-template-areas:
      "aside main";
    grid-template-columns: .5fr 3fr;
    grid-template-rows: 1fr;
    grid-auto-flow: dense;
    grid-gap: 10px;
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
}

aside {
    background: var(--blue-white);
    grid-area: aside;
    padding: 15px;
}

main {
    //background: url('@/assets/images/pexels-johannes-plenio-1103970.png');
    grid-area: main;
}

</style>
