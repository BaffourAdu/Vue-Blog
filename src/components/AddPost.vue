<template>
  <div class="addpost">
    <div class="container">
        <MainNav/>
        <h1>Add New Post</h1>
        <hr>

        <Alert v-if="alert" v-bind:message="alert"/>

        <form v-on:submit="createPost">
            <div class="form-group">
                <label>Post Image</label>
                <picture-input 
                    ref="pictureInput" 
                    @change="onChange" 
                    :crop="false"
                    width="200" 
                    :removable="true"
                    :hideChangeButton="true"
                    :toggleAspectRatio="true"
                    height="200" 
                    margin="16" 
                    v-model="post.image"
                    name="postImage"
                    id="postImage"
                    accept="image/jpeg,image/png" 
                    size="10" 
                    buttonClass="btn"
                    removeButtonClass="btn btn-secondary"
                    :customStrings="{
                        upload: '<p>Your device does not support file uploading.</p>', // HTML allowed
                        drag: 'Drag an image or <br>click here to select a file', // HTML allowed
                        tap: 'Tap here to select a photo <br>from your gallery', // HTML allowed
                        change: 'Change Photo', // Text only
                        remove: 'Remove Photo', // Text only
                        select: 'Select a Photo', // Text only
                        selected: '<p>Photo successfully selected!</p>', // HTML allowed
                        fileSize: 'The file size exceeds the limit', // Text only
                        fileType: 'This file type is not supported.', // Text only
                        aspect: 'Landscape/Portrait' // Text only
                    }">
                </picture-input> 
            </div>
            <div class="form-group">
                <label>Post Title</label>
                <input type="text" class="form-control" v-model="post.title" placeholder="Enter Post Title" required>
            </div>
            <div class="form-group">
                <label>Post Body</label>
                <textarea class="form-control" v-model="post.body" rows="5" placeholder="Enter your Post here" required></textarea>
            </div>
                <input type="submit" value="Submit" class="btn btn-primary">
        </form>
    </div>
  </div>
</template>


<script>
import MainNav from './MainNav'
import PictureInput from 'vue-picture-input'
import Alert from './Alert'

export default {
  name:'addpost',
  data () {
      return {
            post: {},
            alert: ''
      }
  },
    components: {
    MainNav, PictureInput, Alert
  },
  methods: {
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
    createPost(e){

        console.log("Form has been Submitted");

        if (!this.post.title || !this.post.body) {
            console.log("Please fill in all required fields");   
        }else{
            let newPost = {
                title: this.post.title,
                body: this.post.body,
                post_image: this.image
            }

            this.$http.post("https://jsonplaceholder.typicode.com/posts", newPost)
                .then(function(response) {
                    //Ridirect back to homepage
                    this.alert = "New Post Created !"
                    //this.$router.push({path: '/'});
                    console.log(newPost);
                });
            e.preventDefault();
        }
        e.preventDefault();
    }   
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
