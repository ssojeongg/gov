<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
import '../src/assets/scss/reset.scss';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components : {
    Header,
    Footer
  }
}
</script>

<style>

</style>