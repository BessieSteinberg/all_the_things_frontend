<template>
  <div class="signup">
      <h1>Create New Account</h1>
      <div class="field">
          <label class="label">Display Name</label>
          <div class="control">
              <input v-model="displayName" class="input" type="text">
          </div>
      </div>
      <div class="field">
          <label class="label">Username</label>
          <div class="control">
              <input v-model="username" class="input" type="text">
          </div>
      </div>
      <div class="field">
          <label class="label">Email Address</label>
          <div class="control">
              <input v-model="emailAddress" class="input" type="text">
          </div>
      </div>
      <div class="field">
          <label class="label">Password</label>
          <div class="control">
              <input v-model="password" class="input" type="text">
          </div>
      </div>
      <button class="button is-primary" @click="submitCreateNewAccount">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'CreateNewAccount',
  data() {
      return {
        displayName: null,
        username: null,
        emailAddress: null,
        password: null,
      };
  },
  methods: {
    submitCreateNewAccount() {
      this.$http.post('http://127.0.0.1:8000/users/', JSON.stringify({
        display_name: this.displayName,
        username: this.username,
        email_address: this.emailAddress,
        password: this.password,
      })).then(
        (response) => {
          console.log(response);
        },
      ).catch(
        (error) => {
          console.log(error);
        },
      );
    },
  },
};

</script>
