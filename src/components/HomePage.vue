<template>
    <LayoutMain>
        <!-- Slot header -->
        <template #header>
            <HeaderMain />
        </template>
        <!-- Slot contents -->
        <template #resume>
            <ResumeContent />
        </template>
        <!-- Slot movement history -->
        <template #movements>
            <MovementHistory />
        </template>
    </LayoutMain>
</template>

<script setup>
import LayoutMain from './LayoutMain.vue';
import HeaderMain from './HeaderMain.vue';
import ResumeContent from './ResumeContent.vue';
import MovementHistory from './MovementHistory.vue';
</script>

<style lang="scss" scoped></style>
