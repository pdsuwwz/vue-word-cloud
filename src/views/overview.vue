<template>
  <div class="overview-box">
    <div class="box-container">
      <div class="box-container__inner">
        <WordCloud
          :keywords="keyWordsList"
        />
      </div>
    </div>
    <Footer show-border />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import WordCloud from '@/components/Chart/WordCloud.vue'

import { keywords } from '@/data/index'

export default defineComponent({
  name: 'Overview',
  components: {
    WordCloud
  },
  setup () {

    const keyWordsList = ref([])
    for (const key in keywords) {
      keyWordsList.value.push({
        name: key,
        value: keywords[key]
      })
    }

    return {
      keyWordsList
    }
  }
})
</script>

<style lang="scss" scoped>
.overview-box {
  display: flex;
  flex-direction: column;
  height: 100%;
  .box-container {
    display: flex;
    align-items: center;
    flex: 1;
    margin: 0 auto;
    .box-container__inner {
      width: 800px;
      height: 100%;
    }
    @media screen and (max-width: 800px) {
      .box-container__inner {
        width: 100vw;
        height: 100vw;
      }
    }
  }
}
</style>
