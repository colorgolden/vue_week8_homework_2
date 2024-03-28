<template>
    <hr>
    <div class="container">
      <div class="row align-items-center">
          <div class="col-md-7">
            <h2>產品標題</h2>
            <div class="row">
                <div class="col-md-7" style="height: 160px; width:300px">
                    <img style="height:auto; max-width:100%; display:block;" class="photo" :src="product.imageUrl" alt=""> 
                </div>
                <div class="col-md-5">
                    <span><p>{{ product.category }}</p></span>
                    <h3>{{ product.title }}</h3>
                    <hr>
                    <p>{{ product.description }}</p>
                    <div>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>報名人數</option>
                            <option value="1">1位</option>
                            <option value="2">2位</option>
                            <option value="3">3位</option>
                            <option value="4">4位</option>
                            <option value="5">5位</option>
                            <option value="6">6位</option>
                        </select>
                        <p>NT$ {{ product.price }}</p>
                          <RouterLink :to="`/checkout`">
                            <div class="d-grid gap-2">
                            <button class="btn btn-primary" @click="addToCart"
                          style="background-color: #41774A;" type="button">立即預訂</button></div>
                        </RouterLink>
                    </div>
                </div>
            </div>    
          </div>
        </div>
      </div>
    <hr>  
    <div class="row my-5">
      <div class="col-md-4">
        <h3 class="fw-bold">活動內容</h3>
          <div class="swiper-container mt-4 mb-5">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img :src="product.imagesUrl" class="card-img-top rounded-0" alt="...">
                <a href="#" class="text-dark">
                </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
          </div>
      </div>  
    </div>    
  </div>
</template>

<script>
import axios from 'axios'

const { VITE_URL, VITE_PATH  } = import.meta.env

export default {
  data() {
    return {
      product: [],
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    getProduct() {
      const id = this.$route.params.id
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
        })
        .catch((error) => {
          alert(error)
        })
    },
    addToCart() {
      const order = {
        product_id : this.product.id,
        qty : 1
      }
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart/`, { data: order })
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          alert(error)
        })
    }
  },
  mounted() {
    //console.log(this.$route)
  }
}
</script>
