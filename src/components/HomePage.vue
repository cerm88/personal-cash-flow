<template>
    <LayoutMain>
        <!-- Slot header -->
        <template #header>
            <HeaderMain />
        </template>
        <!-- Slot contents -->
        <template></template>
    </LayoutMain>
</template>

<script setup>
import LayoutMain from './LayoutMain.vue';
import HeaderMain from './HeaderMain.vue';
</script>

<style lang="scss" scoped></style>
