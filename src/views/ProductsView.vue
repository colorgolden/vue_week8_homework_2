<template>
  <div class="container">
      <div class="justify-content-center" style="min-height: 400px;">
        <img class="background-position: center center;" src="../assets/img/banner/glamp3.png" alt="">
        <div
          style="top:0; bottom: 0; left: 0; right: 0; background-image: url('../assets/img/banner/glamp3.png'); background-position: center center;">
        </div>
      </div>
          <div class="container mt-md-5 mt-3 mb-7">
            <div class="row">
              <div class="col-md-4">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li class="py-2 d-block text-muted">
                      <RouterLink :to="`/products`">全部行程</RouterLink>
                    </li>
                    <li class="py-2 d-block text-muted" v-for="item in categories" :key="item">
                      <RouterLink :to="`/products?category=${item}`">{{ item }}</RouterLink>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
          </div>
          <div class="col-md-8">
          <div class="row">
            <div class="col-md-6">
              <div class="card border-0 mb-4 position-relative position-relative" v-for="product in products" :key="product.id">
              <div>
                <div class="card" style=" border-radius: 1.25em; height:25em; width: 25rem;">
                  <Router-link :to="`/product/${product.id}`"><img :src="product.imageUrl" class="card-img-top rounded-50 object-fit-cover"
                    style="border-radius: 1.25em; height:18em; object-fit: cover;" alt="..."></Router-link>
                  <div class="card-body">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <span>
                      <p>{{ product.category }}</p>
                    </span>
                  </div>
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
//import "../assets/main.css";

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data() {
    return {
      categories: ["兩日套裝行程", "單日行程", "特別活動", "派"],
      products: []
    }
  },
  created() {
    this.getProducts()
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

    getProducts() {
      // eslint-disable-next-line no-undef
      const { category= '' }= this.$route.query
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${category}`)
        .then((res) => {
          this.products = res.data.products
        })
        .catch((error) => {
          alert(error.data.message)
        })
    }
  }
}
</script>
