<template>
  <hr>
  <div class="container">
    <h4>還沒編輯</h4>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            訂購人姓名
          </th>
          <th>地址</th>
          <th width="120">
            電話
          </th>
          <th width="120">
            電子信箱
          </th>
          <th width="100">
            詳細資料
          </th>
        </tr>
      </thead>
      <tbody
        v-for="(item) in carts"
        :key="item.id"
      >
        <tr>
          <td>{{ item.use.name }}</td>
          <td>{{ item.user.address }}</td>
          <td class="text-end">
            {{ item.user.tel }}
          </td>
          <td class="text-end">
            {{ item.user.email }}
          </td>
          <td>
            <button style="background-color: #41774A;" type="button" class="btn btn-primary">詳細</button>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination
      style="display: flex; justify-content: center;align-items: center;"
      :pages="pages"
      :get-products="getCarts"
    />
  </div>
</template>


<script>
import axios from 'axios'
import 'bootstrap/scss/bootstrap.scss'
import "../../../node_modules/bootstrap/scss/bootstrap.scss";

const { VITE_URL , VITE_PATH } = import.meta.env

export default {

  data () {
    return {
      temp: {},
      carts: [],
      pages: {},
    }
  },
  created () {
    this.checkLogin()
    this.getCarts()
  },

  methods: {

    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)newToken\s*=\s*([^;]*).*$)|^.*$/, "$1")
      axios.defaults.headers.common['Authorization'] = token    // 取得 Token（Token 僅需要設定一次）
      if (this.$route.path.includes('/admin')) { // 只要是在admin_products頁面，就執行大括號內的程式碼     
        axios.post(`${VITE_URL}/v2/api/user/check`, {}, { headers: { Authorization: token } })
          .then(() => {
          })
          .catch(() => {
            alert('尚未登入會員，請重新登入！')
            this.$router.push('login') // 跳轉到login頁面
          })
        // eslint-disable-next-line no-empty
      } else {

      }
    },
    getCarts () {
      console.log(this.$route)
      // eslint-disable-next-line no-undef
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/orders`)
        .then((res) => {
          console.log(res)
          this.carts = res.data.orders
          //this.pages = res.data.pagination
        })
        .catch((error) => {
          alert(error)
        })
     }
  },
  // eslint-disable-next-line vue/order-in-components
  components: {
  },

}
</script>

<!-- <template>
    <h2>OrderView</h2>
    <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody
        v-for="(product) in products"
        :key="product.id"
      >
        <tr>
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-end">
            {{ product.origin_price }}
          </td>
          <td class="text-end">
            {{ product.price }}
          </td>
          <td>
            <span
              v-if="product.is_enabled===1"
              class="text-success"
            >啟用</span>
            <span v-else>未啟用</span>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination
      style="display: flex; justify-content: center;align-items: center;"
      :pages="pages"
      :get-products="getProducts"
    />
  </div>
    <RouterView></RouterView>
</template> -->
