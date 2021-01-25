<template>
  <div class="login">
    <form @submit.prevent="signIn">
      <h1>請先登入</h1>
      <div class="form-group">
        <label for="inputEmail">Email Address</label>
        <input type="email" id="inputEmail" v-model="user.email" placeholder="Email Address" required autofocus>
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input type="password" id="inputPassword" v-model="user.password" placeholder="Password" required>
      </div>
      <button type="submit">登入</button>
    </form>
    <form @submit.prevent="signOut">
      <button type="submit">登出</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const url = `${process.env.VUE_APP_APIPATH}auth/login`
      this.$http.post(url, this.user)
        .then(res => {
          // 儲存 cookie 然後跳轉頁面，還沒有驗證 token
          const token = res.data.token
          const expired = res.data.expired
          document.cookie = `token=${token};expires=${new Date(expired * 1000)}; path=/`
          this.$router.push('/admin/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    signOut () {
      document.cookie = 'token=; expires=; path=/'
      this.$router.push('/login')
    }
  }
}
</script>
