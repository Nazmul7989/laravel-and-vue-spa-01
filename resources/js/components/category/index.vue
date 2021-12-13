<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card mt-5">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3>All Category</h3>
                        <router-link :to="{name: 'create-category'}" class="btn btn-success">Create Category</router-link>
                    </div>

                    <div class="card-body">
                       <table class="table table-bordered">
                           <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th style="width: 200px">Action</th>
                                </tr>
                           </thead>
                           <tbody>
                               <tr v-for="category in categories" :key="category.id">
                                   <td>{{  category.id }}</td>
                                   <td>{{ category.name }}</td>
                                   <td>{{ category.slug }}</td>
                                   <td style="width:200px">
                                       <router-link :to="{name: 'edit-category', params:{id: category.id} }" class="btn btn-primary">Edit</router-link>
                                       <button @click.prevent="deleteCategory(category.id)" class="btn btn-danger">Delete</button>
                                   </td>
                               </tr>
                           </tbody>
                       </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Swal from "sweetalert2";

export default {
    data(){
        return{
            categories: []
        }
    },
    methods: {
        loadCategory(){
            axios.get('/api/category').then((res)=>{
                this.categories = res.data;
            })
        },
        deleteCategory(id){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete('/api/category/'+ id).then((res)=>{
                        this.loadCategory();
                    })

                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success',
                    )
                }
            })

        }
    },
    mounted() {
        this.loadCategory();
    }
}
</script>

<style scoped>

</style>
