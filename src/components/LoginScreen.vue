<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 300px;">
      <q-card-section>
        <div class="text-h6">Login</div>
        <div class="text-subtitle2">Please enter your credentials</div>
      </q-card-section>
      
      <q-card-section>
        <q-input
          v-model="username"
          label="Username"
          outlined
          dense
        />
        <q-input
          v-model="password"
          label="Password"
          type="password"
          outlined
          dense
          class="q-mt-md"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Login" color="primary" @click="login" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style>

</style>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app'

export default {
  name: 'LoginPage',
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();
    
    function login(){
      if (username.value === 'user' && password.value === '1234') {
        //redirigim a la pagina
        router.push('/votacions');

        // Guardem la informació a l'store
        const appStore = useAppStore();
        appStore.setLoginInfo({
            loggedIn: true,
            username: username.value,
            image: 'https://randomuser.me/api/portraits/thumb/women/56.jpg', // Reemplaza con el URL real del avatar si lo tienes
          });

      } else {
        alert("error")
      }
    };

    return {
      username,
      password,
      login,
    };
  },
};
</script>
