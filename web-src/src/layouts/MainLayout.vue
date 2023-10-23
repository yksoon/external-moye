<script setup>
import GlobalHeader from "@/components/web/common/GlobalHeader.vue";
import GlobalFooter from "@/components/web/common/GlobalFooter.vue";
</script>

<template>
<div>
    <GlobalHeader />
    <slot />
    <GlobalFooter />
</div>
</template>