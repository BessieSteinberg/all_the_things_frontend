<template>
  <div class="home">
    <div class="columns">
      <div class="column">
        <Login />
      </div>
      <div class="column">
        <CreateNewAccount />
      </div>
    </div>
    <h1>This is the home component</h1>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import CreateNewAccount from '@/components/CreateNewAccount.vue';

export default {
  name: 'home',
  components: {
    Login,
    CreateNewAccount,
  },
};
</script>
