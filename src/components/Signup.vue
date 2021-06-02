<template>
  <div class="signup">
    <router-link to="/auth" @click.native="toLogin">Login</router-link>

    <form @submit.prevent="handleSignup">
      <p v-if="err">{{ err }}</p>
      <div class="container">
        <label for="username"><b>Username</b></label>
        <input
          id="signupUsername"
          v-model="username"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
        <label for="password"><b>Password</b></label>
        <input
          id="signupPassword"
          v-model="password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />
        <button type="submit">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { signup } from '../constants'

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: '',
      err: ''
    }
  },
  methods: {
    async handleSignup () {
      const res = await signup(this.signupUsername, this.signupPassword)

      if (!res.ok) {
        this.err = 'No'
        return
      }

      const token = await res.text()

      this.$emit('jwt-changed', token)
      this.$router.push({ path: '/' })
    },
    toLogin () {
      this.$emit('to-login')
    }
  }
}
</script>
