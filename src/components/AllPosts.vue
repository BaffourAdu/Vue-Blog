<template>
  <div class="blogs container">
        <MainNav/>
        
        <h1>All Posts</h1>
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
                    <td colspan="2">
                      <form action="">
                        <input type="button" value="Edit Post" class="btn btn-primary">
                      </form><br>
                      <form action="">
                        <input type="button" value="Delete Post" class="btn btn-danger">
                      </form>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
</template>


<script>
import MainNav from './MainNav'
import data from '../assets/posts.json'

export default {
  name:'blogs',
  data () {
      return {
          blogs: [],
          posts: data
      }
  },
    components: {
    MainNav
  },
  methods: {
      fetchBlogs() {
        //https://jsonplaceholder.typicode.com/posts
         /* this.$http.get(this.posts)
                .then(function(response){
                        this.blogs = response.body;
                        console.log(this.blogs);
                });*/

                this.blogs = this.posts
      }
  },
  created: function() {
      this.fetchBlogs();
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
