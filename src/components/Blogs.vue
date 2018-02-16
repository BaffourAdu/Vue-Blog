<template>
  <div class="blogs">
    <div class="container">
            <MainNav/>

            <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div class="col-md-6 px-0">
                <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
                <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
                </div>
            </div>

            <div class="row mb-2">
                <div class="col-md-6 blog" v-for="blog in blogs">
                <div class="card flex-md-row mb-4 box-shadow h-md-250">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h5 class="mb-0">
                            <a class="text-dark" :href="'/post/' + blog.id">{{blog.title}}</a>
                        </h5>
                        <div class="mb-1 text-muted">{{blog.post_date}}</div>
                        <p class="card-text mb-auto">{{blog.body.slice(0, 100)}}</p>
                        <a :href="'/post/' + blog.id">Continue reading</a>
                    </div>
                         <img class="card-img-right flex-auto d-none d-md-block" src="http://via.placeholder.com/200x250" alt="Card image cap">
                </div>
                </div>
            </div>
        </div>
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
