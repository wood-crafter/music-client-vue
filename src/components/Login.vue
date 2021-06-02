<template>
  <div>
    <router-link to="/auth" @click.native="toSignup">Signup</router-link>

    <form @submit.prevent="handleSignIn">
      <p v-if="err">{{ err }}</p>
      <div class="container">
        <label for="username"><b>Username</b></label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
        <label for="password"><b>Password</b></label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { login } from '../constants'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      err: ''
    }
  },
  methods: {
    async handleSignIn () {
      const res = await login(this.username, this.password)

      if (!res.ok) {
        this.err = 'No'
        return
      }

      const token = await res.text()

      this.$emit('jwt-changed', token)
      this.$router.push({ path: '/' })
    },
    toSignup () {
      this.$emit('to-signup')
    }
  },
  props: {}
}
</script>
