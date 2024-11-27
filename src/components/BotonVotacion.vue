<script setup>
import { defineProps } from 'vue';
import { socket } from '@/socket';

const props = defineProps({
  idVoto: Object,
  votosActuales: Number
})

const emitirVotacion = (idVoto) => {
  socket.emit('votacion', idVoto);
};
</script>

<template>  
<div>
    <div>{{ props.votosActuales }} vots</div>
   
    <q-btn
    label="Votar"
    color="primary"
    @click="emitirVotacion(props.idVoto)">VOTA a la opció {{ props.idVoto }}</q-btn>
</div>
 
</template>
