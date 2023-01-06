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
    border: 2px solid #97b4c6;

    &:disabled {
        //opacity: .5;
        cursor: not-allowed;
    }
}
</style>