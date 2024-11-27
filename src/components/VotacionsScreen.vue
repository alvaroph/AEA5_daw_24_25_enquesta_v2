<script setup>
import botonVotacion from './BotonVotacion.vue'

import { useAppStore } from '@/stores/app'
import { computed } from 'vue';

const store = useAppStore();

</script>

<template>
  <main>
 
    <botonVotacion idVoto="0" text="Votar" :votosActuales="store.infoVotos.votos[0]" />
    <botonVotacion idVoto="1" text="Votar" :votosActuales="store.infoVotos.votos[1]" />
    <botonVotacion idVoto="2" text="Votar" :votosActuales="store.infoVotos.votos[2]" />
    <botonVotacion idVoto="3" text="Votar" :votosActuales="store.infoVotos.votos[3]" />

  
  </main>
</template>
