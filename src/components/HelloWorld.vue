<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ $t('profile.title[0]') }}</h1>
    <ul>
      <li v-for="(item, index) in $t('profile.select[0].option')" :key='index + 1'>{{ item }}</li>
    </ul>
    <button data-lang='ch' @click='setLang' style="margin-right:10px">中文</button>
    <button data-lang='en' @click='setLang'>English</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    // setActiveLanguage 會將 localStorage 中的 lang 設定為傳入的參數
    setActiveLang (lang) {
      localStorage.setItem('language', lang)
    },
    // setLang 則會將 button 的 dataset.lang 值傳入 setActiveLanguage，並在最後重整網頁。
    setLang (evt) {
      const lang = evt.target.dataset.lang
      this.setActiveLang(lang)
      return history.go(0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
