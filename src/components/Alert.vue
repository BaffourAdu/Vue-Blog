<template>
  <div class="alerts">
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            {{message}}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
  </div>
</template>


<script>

export default {
  name:'alerts',
  props: ['message'],
  data () {
     return{

     }
  }
}
</script>

<style scoped>

</style>
