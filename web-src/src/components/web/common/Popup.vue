<script setup>
const props = defineProps({
    popup: Object,
});

window.open('', '_blank');
</script>

<template>
    <div class="popup_wrapper">
        <h1>{{ props.popup.title }}</h1>
        <div>{{ props.popup.content }}</div>
    </div>
</template>

<style scoped>
.popup_wrapper {
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
}
</style>