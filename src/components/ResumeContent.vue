<template>
    <main>
        <!-- Titulo y monto -->
        <p>{{ labelVisual }}</p>
        <h1>{{ amountCurrency }}</h1>
        <!-- Gráfico -->
        <div class="graphic">
            <slot name="graphic"></slot>
        </div>
        <!-- Botón -->
        <div class="action">
            <slot name="action"></slot>
        </div>
    </main>
</template>

<script setup>
import { computed } from 'vue';
import { toRefs } from 'vue';

// Función para formatear números a moneda
const currencyFormater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const props = defineProps({
    // Título con monto de fecha
    dateLabel: { type: String, default: null },
    // título con monto total
    totalLabel: String,
    // Monto de la fecha específica
    dateAmount: { type: Number, default: null },
    // Monto total de los gastos
    totalAmount: Number,
});

const { dateLabel, totalLabel, dateAmount, totalAmount } = toRefs(props);

const amountVisual = computed(() =>
    dateAmount.value !== null ? dateAmount.value : totalAmount.value,
);

const amountCurrency = computed(() => currencyFormater.format(amountVisual.value));

const labelVisual = computed(() => (dateLabel.value !== null ? dateLabel.value : totalLabel.value));
</script>

<style lang="scss" scoped></style>
