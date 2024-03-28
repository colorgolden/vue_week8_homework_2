<template>
    <nav>
        <div style="display: flex; justify-content: center; align-items: center;">
            <RouterLink to="/"><img style="height:120px;" src="../assets/img/logo.png"/></RouterLink>
        </div>
        <div class="navbar-collapse justify-content-end" style="display: flex; justify-content: center; align-items: right;">
            <p>
                <RouterLink to="/" style="color: gray;">首頁</RouterLink> / 
                <RouterLink to="/products" style="color: gray;">預約行程</RouterLink> / 
                <RouterLink to="/about" style="color: gray;">關於我們</RouterLink> 
            </p>
        </div>    
    </nav>
    <RouterView></RouterView>
    <footer id="footer" style="height: 37.5em;">
        <div style="background-image: url(src/assets/img/footer.png); height: 37.5em;
    background-position: center center; background-repeat: no-repeat; background-size: cover; color: white;">
        <h3>森心靈自然體驗渡假村</h3>
            <div class="justify-content-end">
                <p>南投縣森林鄉小溪鎮77號</p>
                <p>電話:049-888666</p>
            </div>
        </div> 
    </footer>
</template>