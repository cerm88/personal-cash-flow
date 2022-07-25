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
            <MovementsHistory :movements="movements" />
        </template>
    </LayoutMain>
</template>

<script setup>
import LayoutMain from './LayoutMain.vue';
import HeaderMain from './HeaderMain.vue';
import ResumeContent from './ResumeContent.vue';
import MovementsHistory from './MovementsHistroy/index.vue';

// Label de fecha dinámica
const dateLabel = null;

// Monto de fecha dinámico
const dateAmount = null;

// Lista de movimientos
const movements = [
    {
        id: 0,
        title: 'Movimiento 1',
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
        amount: -2000,
    },
    {
        id: 1,
        title: 'Movimiento 2',
        description: 'Lorem ipsum dolor sit amet',
        amount: 1000,
    },
    {
        id: 2,
        title: 'Movimiento 3',
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
        amount: -3000,
    },
    {
        id: 3,
        title: 'Movimiento 4',
        description: 'Lorem ipsum dolor sit amet',
        amount: 2500,
    },
    {
        id: 4,
        title: 'Movimiento 5',
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
        amount: -3500,
    },
    {
        id: 6,
        title: 'Movimiento 7',
        description: 'Lorem ipsum dolor sit amet',
        amount: 1000,
    },
    {
        id: 7,
        title: 'Movimiento 8',
        description: 'Lorem ipsum dolor sit amet',
        amount: -1000,
    },
    {
        id: 8,
        title: 'Movimiento 9',
        description: 'Lorem ipsum dolor sit amet',
        amount: 1000,
    },
];
</script>

<style lang="scss" scoped></style>
