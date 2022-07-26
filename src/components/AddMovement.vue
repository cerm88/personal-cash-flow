<template>
    <!-- Botón para abrir la ventana modal -->
    <input @click="showModal = true" type="button" value="Agregar Movimiento" />
    <!-- La ventana modal -->
    <teleport to="#app">
        <div v-show="showModal">
            <ModalWindows @close-modal="showModal = false">
                <form @submit.prevent="submit" class="form-addmovement">
                    <div class="field">
                        <label>Título</label>
                        <input type="text" v-model="title" />
                    </div>
                    <div class="field">
                        <label>Monto</label>
                        <input type="number" v-model="amount" />
                    </div>
                    <div class="field">
                        <label>Descripción</label>
                        <textarea rows="4" v-model="desc"></textarea>
                    </div>
                    <div class="field">
                        <label>Tipo de movimiento</label>
                        <label class="radio-label">
                            <input
                                v-model="movementType"
                                type="radio"
                                value="Ingreso"
                                name="income"
                                checked
                            />
                            <span>Ingreso</span>
                        </label>
                        <label class="radio-label">
                            <input
                                v-model="movementType"
                                type="radio"
                                value="Gasto"
                                name="income"
                            />
                            <span>Gasto</span>
                        </label>
                    </div>
                    <div class="action">
                        <input type="submit" value="Agregar Movimiento" />
                    </div>
                </form>
            </ModalWindows>
        </div>
    </teleport>
</template>

<script setup>
import { ref } from 'vue';
import ModalWindows from './ModalWindows.vue';

const showModal = ref(false);
const title = ref('');
const amount = ref(0);
const desc = ref('');
const movementType = ref('Ingreso');

const submit = () => {
    showModal.value = false;
    console.log('title:', title.value);
    console.log('amount:', amount.value);
    console.log('desc:', desc.value);
    console.log('movementType:', movementType.value);
};
</script>

<style lang="scss" scoped></style>
