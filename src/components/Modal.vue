<template>
  <div>
    <transition name="modal">
      <div v-if="isShow">
        <div class="overlay" @click.self="isShow = false">
          <div class="modal">
            <h1>{{ title }}</h1>
            <p>{{ content }}</p>
            <button @click="isShow = false">關閉彈窗</button>
          </div>
        </div>
      </div>
    </transition>
    <button @click="isShow = true">{{ isShow ? "關閉" : "打開"}}彈窗 </button>
  </div>
</template>

<style>
.modal {
  width: 500px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}

button {
  padding: 7px;
  margin-top: 10px;
  background-color: rgb(53, 175, 114);
  color: white;
  font-size: 1.1rem;
  border-radius: 10px;
  border: none;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}
</style>

<script>
export default {
  name: 'Modal',
  props: ['title', 'content'],
  data () {
    return {
      isShow: false
    }
  }
}
</script>
