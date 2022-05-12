<template>
  <div class="box-container">
    <WordCloud
      :keywords="keyWordsList"
    />
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
.box-container {
  width: 800px;
  height: 600px;
  margin: 0 auto;
}
</style>
