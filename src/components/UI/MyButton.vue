<template>
    <button type="button" class="v-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style lang="scss" scoped>
.v-button {
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    color: var(--font-color);
    border: solid;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(60deg, #b16ec4, #5f97b9);

    &:disabled {
        opacity: .5;
    }
}
</style>