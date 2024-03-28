<template>
    <div class="position-relative">
      <div class="position-absolute" style="top:0; bottom:0; left:0; right:0; background-image: url(src/assets/img/main_image.png);
      background-position: center center;"></div>
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="./index.html">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link me-4 active" href="./index.html">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link me-4" href="./product.html">Product</a>
              <a class="nav-item nav-link me-4" href="./detail.html">Detail</a>
              <a class="nav-item nav-link" href="./cart.html"><i class="fas fa-shopping-cart"></i></a>
            </div>
          </div>
        </nav>
        <div class="row justify-content-center my-auto">
          <div class="col-md-4 text-center">
            <h2>Lorem ipsum.</h2>
            <p class="text-muted mb-0">走一趟與內心對話的豐盛之旅</p>
            <button class="btn btn-dark rounded-0 mt-6">身心靈之旅</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
