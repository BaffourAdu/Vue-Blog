<template>
  <div class="editpost">
    <div class="container">
        <MainNav/>
        <h1>Edit Post</h1>
        <hr>

        <Alert v-if="alert" v-bind:message="alert"/>

        <form v-on:submit="updatePost">
            <div class="form-group">
                <label>Post Title</label>
                <input type="text" class="form-control" v-bind:value="post.title" placeholder="Enter Post Title" required>
            </div>
            <div class="form-group">
                <label>Post Body</label>
                <textarea class="form-control" v-bind:value="post.body" rows="5" placeholder="Enter your Post here" required></textarea>
            </div>
                <input type="submit" value="Submit" class="btn btn-primary">
        </form>
    </div>
  </div>
</template>


<script>
import MainNav from './MainNav'
import Alert from './Alert'

export default {
  name:'editpost',
  data () {
      return {
            post: {},
            alert: ''
      }
  },
    components: {
    MainNav, Alert
  },
  methods: {
    fetchPost(id) {
            this.$http.get("https://jsonplaceholder.typicode.com/posts/"+ id)
                .then(function(response){
                        this.post = response.body;
                });
    },
    updatePost(e){

        console.log("Form has been Submitted");

        if (!this.post.title || !this.post.body) {
            console.log("Please fill in all required fields");   
        }else{
            let updatePost = {
                title: this.post.title,
                body: this.post.body,
            }                    


            this.$http.put("https://jsonplaceholder.typicode.com/posts/"+id, updatedPost)
                .then(function(response) {
                    this.alert = "Post Updated!";
                    //this.$router.push({path: '/'});
                    console.log(response.body);
                });
            e.preventDefault();
        }
        e.preventDefault();
    }   
  },
  created : function (){
      this.fetchPost(this.$route.params.id);
  }
}
</script>

<style scoped>
h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
  font-weight: bold;
  font-variant: small-caps
}
</style>
