<template>
    <LayoutMain>
        <!-- Slot header -->
        <template #header>
            <HeaderMain />
        </template>
        <!-- Slot contents -->
        <template #resume>
            <ResumeContent
                :total-label="'Ahorro Total'"
                :date-label="dateLabel"
                :total-amount="1000"
                :date-amount="dateAmount"
            >
                <template #graphic>Graphic</template>
                <template #action>Action</template>
            </ResumeContent>
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

// Label de fecha dinámica
const dateLabel = null;

// Monto de fecha dinámico
const dateAmount = null;
</script>

<style lang="scss" scoped></style>
