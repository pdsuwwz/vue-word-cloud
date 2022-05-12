<template>
  <div
    ref="refChart"
    class="word-cloud-box"
  ></div>
</template>

<script>
import { defineComponent, nextTick, ref } from 'vue'
import * as Echarts from 'echarts'
import 'echarts-wordcloud'
import maskImagePath from '@/assets/images/mask-image.png'

export default defineComponent({
  name: 'WordCloud',
  props: {
    keywords: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup (props) {

    const refChart = ref(null)
    const chartInstance = ref(null)

    nextTick(() => {
      chartInstance.value = Echarts.init(refChart.value)
      const maskImage = new Image()

      const options = {
        tooltip: {},
        series: [{
          type: 'wordCloud',
          // sizeRange: [12, 20],
          rotationRange: [-90, 90],
          gridSize: 0,
          shape: 'pentagon',
          maskImage: maskImage,
          drawOutOfBound: false,
          layoutAnimation: true,
          keepAspect: true,
          textStyle: {
            fontWeight: 'bold',
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 200) + 50,
                Math.round(Math.random() * 50),
                Math.round(Math.random() * 50) + 50
              ].join(',') + ')'
            }
          },
          emphasis: {
            textStyle: {
              color: '#528'
            }
          },
          data: props.keywords
        }]
      }

      maskImage.onload = () => {
        chartInstance.value.setOption(options)
      }
      maskImage.src = maskImagePath

    })
    return {
      maskImagePath,
      refChart
    }
  }
})

</script>

<style lang="scss" scoped>
.word-cloud-box {
  width: 100%;
  height: 100%;
}
</style>
