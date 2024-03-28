<template>
<div style="display: flex; justify-content: center; align-items: center;">
  <RouterLink to="/"><img style="height:200px;" src="../../assets/img/logo.png"/></RouterLink>
</div>
  <form style="display: flex; flex-direction:column; justify-content: center; align-items: center;">
    <div class="form-group">
      <label for="exampleInputEmail1">管理者帳號(電子信箱)</label>
      <input
        id="exampleInputEmail1"
        v-model="user.username"
        type="email"
        class="form-control"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      >
      <!-- <small
        id="emailHelp"
        class="form-text text-muted"
      >We'll never share your email with anyone else.</small> -->
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">管理者密碼</label>
      <input
        id="exampleInputPassword1"
        v-model="user.password"
        type="password"
        class="form-control"
        placeholder="Password"
      >
    </div>
    <button
      type="button"
      class="btn btn-primary"
      @click="login"
    >
      登入
    </button>
  </form>
</template>

<script>
import axios from 'axios'

const url = 'https://vue3-course-api.hexschool.io' // 請加入站點

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },

  created () {
    // this.checkLogin();
  },
  mounted () {
    console.log(this.$router, this.$route)
  },
  methods: {

    login () {
      // #2 發送 API 至遠端並登入（並儲存 Token）
      axios.post(`${url}/v2/admin/signin`, this.user)
        .then((res) => {
          alert(res.data.message)
          const { token, expired } = res.data // 寫入 cookie token
          console.log('test',res.data,token,expired)
          document.cookie = `newToken=${token}; expires=${new Date(expired)};` // expires 設置有效時間
          this.$router.push('/admin/products')
        })
        .catch(() => {
          alert('登入失敗')
        })
    }
  }
}
</script>

<style scoped>
</style>
