<template>
  <div class="postDetails">
    <div class="container">
            <MainNav/>

            <div style="margin-top:30px;margin-bottom:20px">
                <img src="http://placekitten.com/g/1200/400" alt="company logo" style="width: 100%;">
            </div>       

            <div class="blog-post">

                <h2 class="blog-post-title" style="margin-top:10px;margin-bottom:20px">{{post.title}}</h2>

                <p>{{post.body}}</p>
            </div><!-- /.blog-post -->

        </div>
    </div>
</template>


<script>
import MainNav from './MainNav'

export default {
  name:'postDetails',
  data () {
      return {
          post : ''
      }
  },
    components: {
    MainNav
  },
  methods: {
      fetchPost(id) {
            this.$http.get("https://jsonplaceholder.typicode.com/posts/"+ id)
                .then(function(response){
                        this.post = response.body;
                        console.log(this.post);
                });
      }
  },
  created: function() {
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
