<template>
<div class="container mt-2">
    <div class="row">
        <div class="col-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <a class="navbar-brand" href="#">Site Logo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link exact-active-class="active" class="nav-link" :to="{name: 'home'}">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link exact-active-class="active" class="nav-link" :to="{name: 'category'}">Category</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: "header.vue"
}
</script>

<style scoped>
.navbar .active{
    color: red !important;
}
</style>
