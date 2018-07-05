<template>
  <div class="me-progress" :class="{hide: !showProgress}">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'me-progress',
  props: {
    value: Boolean,
    showProgress: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      current: false,
      hasComputed: false
    }
  },
  watch: {
    showProgress(newVal, oldVal) {
      const _this = this
      if (newVal && !_this.hasComputed) {
        this.$nextTick(() => {
          _this._mapPropsToChildComponent()
        })
      }
    }
  },
  created() {
    this.current = this.value
  },
  mounted() {
    if (this.showProgress) {
      this._mapPropsToChildComponent()
    }
  },
  methods: {
    _mapPropsToChildComponent() {
      const _this = this
      const len = this.$children.length - 1

      _this.hasComputed = true

      this.$children.forEach((child, index) => {
        // 最后一个
        if (index === len) {
          child.currentStatus = _this.current
        } else {
          child.progressLineHeight = _this.getProgressLineHeight(child.$el, _this.$children[index + 1].$el) + 'px'
        }
      })
    },

    getProgressLineHeight(currentChild, nextChild) {
      // 当前子组件计算高度
      const currentHeight = parseInt(window.getComputedStyle(currentChild, null).height, 10)

      // 下一个子组件计算高度
      const nextHeight = parseInt(window.getComputedStyle(nextChild, null).height, 10)

      // 组件间的间隙
      const gapHeight = parseInt(window.getComputedStyle(nextChild, null).marginTop, 10)

      const progressLineHeight = (currentHeight + nextHeight) / 2 + gapHeight

      return progressLineHeight
    }
  }
}
</script>

<style scoped>
  .hide {
    display: none;
  }
</style>
