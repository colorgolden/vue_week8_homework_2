<!-- 
<template>
  <div class="my-5 row justify-content-center">
    <VeeForm ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <VeeField id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email" rules="email|required" v-model="form.user.email" />
        <ErrorMessage name="email" class="invalid-feedback" />
      </div>
      ...
      <div class="text-end">
        <button type="submit" class="btn btn-danger">送出訂單</button>
      </div>
    </VeeForm>
  </div>
</template> -->
<template>
<div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="fw-bold mb-4 pt-3">結帳</h3>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-center pb-5">
        <div class="col-md-4">
          <div v-for="product in cart" :key="product" class="border p-4 mb-4">
            <div class="d-flex">
              <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 fw-bold">{{ product.product.title }}</p>
                  <p class="mb-0">NT$ {{ product.product.price }}</p>
                </div>
                <p class="mb-0 fw-bold">人數：{{ product.qty }}位</p>
              </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                  <td class="text-end border-0 px-0 pt-4">NT$ {{ product.total }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">線上付款</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總金額</p>
              <p class="mb-0 h4 fw-bold">NT$ {{ product.final_total }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <VeeForm ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
            <p>聯絡資訊</p>
            <div class="mb-0">
  
                  <div class="mb-3">
                    <div class="mb-2">
                      <label for="name" class="form-label">姓名</label>
                       <VeeField id="name" name="姓名" type="text" class="form-control" 
                       placeholder="請輸入姓名" rules="required" :class="{ 'is-invalid': errors['姓名'] }"
                        v-model="form.user.name"></VeeField>
                      <error-message name="姓名" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-2">
                      <label for="tel" class="form-label">電話</label>
                      <VeeField id="tel" name="電話" type="text" class="form-control" 
                       placeholder="請輸入電話" :class="{ 'is-invalid': errors['電話'] }"
                       rules="numeric|min:9" v-model="form.user.tel"></VeeField>  
                       <!-- 只能輸入數字＆最少輸入9個字元 -->
                     <error-message name="電話" class="invalid-feedback"></error-message>
                     </div>
                    <label for="ContactMail" class="text-muted mb-0">電子信箱</label>
                    <VeeField id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }"
                      placeholder="請輸入 Email" rules="email|required" v-model="form.user.email" />
                    <ErrorMessage name="email" class="invalid-feedback" />
                    <div class="mb-2">
                      <p class="mt-4">訂單備註</p>
                      <label for="ContactMessage" class="text-muted mb-0">備註</label>
                      <textarea class="form-control" rows="3" id="ContactMessage" placeholder="有什麼想跟我們說的嗎？"></textarea>
                    </div>
                  </div>
                  <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end">
                    <a href="./product.html" class="text-dark mt-md-0 mt-3"><i class="fas fa-chevron-left me-2"></i> 上一步</a>
                   <button type="submit" @click="createOrder" to="./checkout-success.html">確認送出</button>
                   <!-- <a href="./checkout-success.html" class="btn btn-dark py-3 px-7">確認送出</a> -->
                  </div>
            </div>
          </VeeForm>

        </div>
      </div>
    </div>
</template>


<script>
import axios from 'axios'
//import "../assets/main.css";

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data() {
    return {
      cart: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      }
    }
  },
  created() {
    this.getCart()
  },
  watch:{
    '$route.query':{
      handler() {
        this.getProducts()
      },
      deep:true,   //深層監聽
    }
  },
  methods: {

    getCart() {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data.carts
          console.log("cart",this.cart)
        })
        .catch((error) => {
          alert(error.data.message)
        })
    },
    createOrder() {
      const order = this.form
      axios.post(`${VITE_URL}/api/${VITE_PATH}/order`, { data: order }).then((res) => {
        console.log(res.data)
        this.$router.push(`checkout-success`)
        //this.$router.push(`/checkout/${res.data.orderId}`)
        this.$refs.form.resetForm()
      }).catch((err) => {
        alert(err.response.data.message)
      });
    },
  }
}
</script>


<style scoped>
</style>
