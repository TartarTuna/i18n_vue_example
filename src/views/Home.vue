<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Modal :title="modalTitle" :content="modalContent"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Modal
  },
  data () {
    return {
      modalTitle: '外面傳進元件的標題',
      modalContent: '外面傳進元件的內容'
    }
  }
}
</script>
