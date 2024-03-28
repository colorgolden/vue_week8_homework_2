<template>
    <h2>這是後台</h2>
    <nav>
        <RouterLink to="/admin/products">Products List</RouterLink> |
        <RouterLink to="/admin/order">Order List</RouterLink> |
        <RouterLink to="">Return to User's Page</RouterLink>
    </nav>
    <RouterView></RouterView>
</template>
