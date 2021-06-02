<template>
  <div class="Auth">
    <Login v-if="onLogin" @jwt-changed="handleJwtChange" @to-signup="toSignup"/>
    <Signup v-else @jwt-changed="handleJwtChange" @to-login="toLogin"/>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'

export default {
  name: 'Auth',
  components: {
    Login,
    Signup
  },
  data () {
    return {
      onLogin: true
    }
  },
  methods: {
    handleJwtChange (token) {
      this.$emit('jwt-changed', token)
    },
    toLogin () {
      this.onLogin = true
    },
    toSignup () {
      this.onLogin = false
    }
  }
}
</script>
