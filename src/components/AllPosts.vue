<template>
  <div class="blogs container">
        <MainNav/>
        
        <h1>All Posts</h1>
        
        <Alert v-if="alert" v-bind:message="alert"/>

        <table class="table table-striped">
            <thead>
                <th>Post Id</th>
                <th>Posted By</th>
                <th>Post Title</th>
                <th>Post</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr v-for="blog in blogs">
                    <td>{{blog.id}}</td>
                    <td>{{blog.name}}</td>
                    <td>{{blog.title}}</td>
                    <td>{{blog.body}}</td>
                    <td colspan="3">
                        <div class="btn-group">
                          <input type="button" value="Edit Post"  class="btn btn-primary">
                          <input type="button" value="Delete Post" @click="deletePost(blog.id)" class="btn btn-danger">
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
</template>


<script>
import MainNav from './MainNav'
import Alert from './Alert'


export default {
  name:'blogs',
  data () {
      return {
          blogs: [],
          alert: ''
      }
  },
    components: {
    MainNav, Alert
  },
  methods: {
      fetchPosts() {
          this.$http.get("https://jsonplaceholder.typicode.com/posts")
                .then(function(response){
                        this.blogs = response.body;
                        console.log(this.blogs);
                });

      },
      deletePost (id) {
            this.$http.delete("https://jsonplaceholder.typicode.com/posts/"+ id)
                .then(function(response){
                        this.post = response.body;
                        this.alert = "Post with id " + id+ " deleted !";
                        console.log(this.post);
                });
      }
  },
  created: function() {
      this.fetchPosts();
  }
}
</script>

<style scoped>

h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
  font-weight: bold;
  font-variant: small-caps
}
/*
 * Blog name and description
 */
.blog-title {
  margin-bottom: 0;
  font-size: 2rem;
  font-weight: 400;
}
.blog-description {
  font-size: 1.1rem;
  color: #999;
}

@media (min-width: 40em) {
  .blog-title {
    font-size: 3.5rem;
  }
}

/* Pagination */
.blog-pagination {
  margin-bottom: 4rem;
}
.blog-pagination > .btn {
  border-radius: 2rem;
}

/*
 * Blog posts
 */
.blog-post {
  margin-bottom: 4rem;
}
.blog-post-title {
  margin-bottom: .25rem;
  font-size: 2.5rem;
}
.blog-post-meta {
  margin-bottom: 1.25rem;
  color: #999;
}

/*
 * Footer
 */
.blog-footer {
  padding: 2.5rem 0;
  color: #999;
  text-align: center;
  background-color: #f9f9f9;
  border-top: .05rem solid #e5e5e5;
}
.blog-footer p:last-child {
  margin-bottom: 0;
}
</style>
