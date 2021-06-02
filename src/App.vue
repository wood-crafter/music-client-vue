<template>
  <div id="app">
    <router-view @jwt-changed="handleJwtChange" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      jwt: localStorage.getItem('jwt')
    }
  },
  created () {
    this.toHomeGuarded()
  },
  methods: {
    handleJwtChange (jwt) {
      this.jwt = jwt
      console.info(jwt)
      localStorage.setItem('jwt', jwt)
    },
    toHomeGuarded () {
      if (!this.jwt && window.location.hash !== '#/auth') {
        this.$router.push({ path: '/auth' })
      }
    }
  }
}
</script>
