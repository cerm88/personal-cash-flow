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
                <template #graphic>
                    <GraphicMovements :amounts="amounts" />
                </template>
                <template #action>
                    <AddMovement />
                </template>
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
import AddMovement from './AddMovement.vue';
import GraphicMovements from './GraphicMovements.vue';
import { computed } from 'vue';

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
        amount: 100,
        date: new Date('07-01-2022'),
    },
    {
        id: 1,
        title: 'Movimiento 2',
        description: 'Lorem ipsum dolor sit amet',
        amount: 200,
        date: new Date('07-10-2022'),
    },
    {
        id: 2,
        title: 'Movimiento 3',
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
        amount: 500,
        date: new Date('07-15-2022'),
    },
    {
        id: 3,
        title: 'Movimiento 4',
        description: 'Lorem ipsum dolor sit amet',
        amount: 200,
        date: new Date('07-17-2022'),
    },
    {
        id: 4,
        title: 'Movimiento 5',
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
        amount: -400,
        date: new Date('07-19-2022'),
    },
    {
        id: 5,
        title: 'Movimiento 6',
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
        amount: -600,
        date: new Date('07-21-2022'),
    },
    {
        id: 6,
        title: 'Movimiento 7',
        description: 'Lorem ipsum dolor sit amet',
        amount: -300,
        date: new Date('07-22-2022'),
    },
    {
        id: 7,
        title: 'Movimiento 8',
        description: 'Lorem ipsum dolor sit amet',
        amount: 0,
        date: new Date('07-25-2022'),
    },
    {
        id: 8,
        title: 'Movimiento 9',
        description: 'Lorem ipsum dolor sit amet',
        amount: 300,
        date: new Date('07-26-2022'),
    },
    {
        id: 9,
        title: 'Movimiento 10',
        description: 'Lorem ipsum dolor sit amet',
        amount: 400,
        date: new Date('07-27-2022'),
    },
];

// Lista de montos
const amounts = computed(() => {
    const today = new Date();
    return movements
        .filter((movement) => {
            const daysDiff = (today.getTime() - movement.date.getTime()) / (1000 * 60 * 60 * 24);
            return daysDiff <= 30;
        })
        .map((movement) => movement.amount)
        .map((_, i, lastDays) => {
            const lastMovements = lastDays.slice(0, i + 1);
            return lastMovements.reduce((accAmount, amount) => accAmount + amount, 0);
        });
});
</script>

<style lang="scss" scoped></style>
