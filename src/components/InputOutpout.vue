<template>
  <div class="wrapper">
    <textarea :name="formular" id="formular" cols="30" rows="10" v-model="textinput" ></textarea>
    <p> {{ textinput }} </p>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        textinput: ""
      }
    }
  }

</script>

<style scoped>
  .wrapper {
    margin: 30px;
    padding: 20px;
  }
</style>
