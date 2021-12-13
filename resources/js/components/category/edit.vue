<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-7">
                <div class="card mt-5">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3>Edit Category</h3>
                        <router-link :to="{name: 'category'}" class="btn btn-success">Back to Category</router-link>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="name">Category Name</label>
                                <input type="text" id="name" v-model="form.name" class="form-control" placeholder="Category name">
                                <div class="text-danger" v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                            </div>
                            <div class="form-group">
                                <input type="submit" @click.prevent="updateCategory" class="btn btn-success" value="Update">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Form from "vform";

export default {
    data(){
        return{
            form: new Form({
                name: ''
            })
        }
    },
    methods: {

        loadCategory(){
            let id = this.$route.params.id;
            axios.get('/api/category/edit/' + id).then((res)=>{

                this.form.name = res.data.name
            })
        },
        updateCategory(){
            let id = this.$route.params.id;

            this.form.put('/api/category/' + id).then((res)=>{
                this.$router.push({name: 'category'})

                this.$toast.success({
                    title:'Success',
                    message:'Category updated successfully'
                })
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
