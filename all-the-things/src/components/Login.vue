<template>
    <div class="login">
        <h1>Log In</h1>
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="text">
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Login',
};
</script>

<style lang="scss" scoped>
    .login {
        text-align: center;
    }
</style>
