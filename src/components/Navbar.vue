<template>
    <header>
        <nav class="container container__flex">

                <router-link to="/" class="container-logo">
                    <img src="@/assets/images/logo.png" alt="">
                </router-link>
                <router-link to="/cart">
                    <div class="cart">
                        <svg class="cart__icon" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 44.16 44.16" style="enable-background:new 0 0 44.16 44.16;"
                             xml:space="preserve">
                                <g>
                                    <path style="fill:#010002;" d="M44.16,6.6H11.592L10.66,1.179H2.408C1.076,1.179,0,2.257,0,3.588v2.408h6.602l4.248,24.709
                                        c0.094,0.544,0.617,0.985,1.17,0.985h28.527c1.332,0,2.41-1.077,2.41-2.411v-2.406H15.078l-0.587-3.414h22.042
                                        c2.66,0,5.172-2.128,5.611-4.75L44.16,6.6z"/>
                                    <circle style="fill:#010002;" cx="19.47" cy="38.817" r="4.165"/>
                                    <path style="fill:#010002;" d="M29.762,38.816c0,2.299,1.863,4.164,4.162,4.164c2.301,0,4.168-1.865,4.168-4.164
                                        c0-2.299-1.867-4.166-4.168-4.166C31.625,34.65,29.762,36.518,29.762,38.816z"/>
                                </g>
                                </svg>
                        <span class="totalCount">{{ inCart.length }}</span>
<!--                        <div v-if="added" class="showMessageAddToCart">Товар добавлен в корзину</div>-->
                    </div>
                </router-link>
        </nav>
    </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({ inCart: 'shopStore/inCart' })
    }
}

</script>

<style lang="scss">
header {
    background: var(--blue-white);
    padding: 15px;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 2;
}

.cart {
    cursor: pointer;
    position: relative;

    &__icon {
        width: 100%;
        max-width: 26px;
    }

    .totalCount {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: gold !important;
        position: absolute;
        color: var(--font-color) !important;
        font-weight: bold;
        left: 17px;
        top: -10px;
        font-size: 0.8rem;
    }
}
</style>