<template>
    <div>
        <svg @touchstart="tap" @touchmove="tap" @touchend="untap" viewBox="0 0 300 200">
            <line stroke="#c4c4c4" stroke-width="2" x1="0" :y1="zero" x2="300" :y2="zero" />
            <polyline fill="none" stroke="#0689B0" stroke-width="2" :points="points" />
            <line
                v-show="showPoiter"
                stroke="#04b500"
                stroke-width="2"
                :x1="pointer"
                y1="0"
                :x2="pointer"
                :y2="200"
            />
        </svg>
        <p>Últimos 30 días</p>
    </div>
</template>

<script setup>
import { toRefs, computed, ref } from 'vue';

const props = defineProps({
    amounts: {
        type: Array,
        default: () => [],
    },
});

const { amounts } = toRefs(props);

// Función que calcula los montos a px
const amountToPx = (amount) => {
    const min = Math.min(...amounts.value);
    const max = Math.max(...amounts.value);
    return 200 - ((amount - min) / Math.abs(max - min)) * 200;
};

// Coordenadas de todos los montos
const points = computed(() => {
    const total = amounts.value.length;
    const difX = 300 / total;
    const x0 = amountToPx(amounts.value[0]);

    return amounts.value.reduce((preAmount, curAmount, i) => {
        const x = difX * (i + 1);
        const y = amountToPx(curAmount);
        return `${preAmount} ${x},${y}`;
    }, `0,${x0}`);
});

// Línea horizontal en el monto cero
const zero = computed(() => amountToPx(0));

// Línea vertical dinámica
const showPoiter = ref(false);
const pointer = ref(0);

// Emitir evento al seleccionar un poits en el gráfico
const emits = defineEmits(['select']);

const tap = (e) => {
    const { target, touches } = e;
    showPoiter.value = true;

    const elementWidth = target.getBoundingClientRect().width;
    const elementX = target.getBoundingClientRect().x;
    const touchX = touches[0].clientX;
    pointer.value = ((touchX - elementX) * 300) / elementWidth;
    // <!-- Todo: propagar el monto al componente padre  -->
    emits('select');
};

const untap = () => {
    showPoiter.value = false;
};
</script>

<style lang="scss" scoped></style>
