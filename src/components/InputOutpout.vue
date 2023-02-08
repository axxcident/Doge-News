<template>
  <p v-if="!testet">Denna syns ifall !testet är true</p>
  <p v-if="testet"> Name:{{ name }} & Email:{{ email }} </p>

</template>

<script>

export default {

  data() {
    return {
      testet: this.$store.state.testet
    }
  },

  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(varde) {
        this.updateName(varde);
      }
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(varde) {
        this.updateEmail(varde);
      }
    }
  }
}

</script>

<style scoped>
.wrapper {
  margin: 30px;
  padding: 20px;
}

.wrapper>* {
  margin: auto 5px;
}
</style>
