<template>
  <div class="me-progress-item">
    <div class="me-progress-step">
      <div class="icon-wrap" :class="{error: !currentStatus}">
        <div v-if="currentStatus" class="icon-tick"></div>
        <div v-else class="icon-error"></div>
      </div>
      <div class="line" :style="{height: progressLineHeight}"></div>
    </div>
    <div class="me-progress-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'progress-item',
    data() {
      return {
        currentStatus: true,
        progressLineHeight: ''
      }
    }
  }
</script>

<style scoped>
  .me-progress-item {
    position: relative;
    margin-top: 17px;
    line-height: 20px;
  }
  .me-progress-item:first-child {
    margin-top: 0;
  }
  .me-progress-step {
    position: absolute;
    width: 18px;
    height: 100%;
  }
  .me-progress-step .icon-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 18px;
    height: 18px;
    background-color: #094b87;
    border-radius: 100%;
    z-index: 1;
  }
  .me-progress-step .icon-wrap.error {
    background-color: #a40000;
  }

  /* 打勾图标 */
  .me-progress-step .icon-tick {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 14px;
    height: 14px;
    transform: rotate(-45deg);
  }
  .me-progress-step .icon-tick:before,
  .me-progress-step .icon-tick:after {
    position: absolute;
    content: '';
    background: #fff;
  }
  .me-progress-step .icon-tick:before {
    top: 16%;
    left: 17.5%;
    width: 1px;
    height: 7px;
  }
  .me-progress-step .icon-tick:after {
    top: 54%;
    left: 17.5%;
    width: 12px;
    height: 1px;
  }

  /* 错误图标 */
  .me-progress-step .icon-error {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 14px;
    height: 14px;
    transform: rotate(-45deg);
  }
  .me-progress-step .icon-error:before,
  .me-progress-step .icon-error:after {
    position: absolute;
    content: '';
    background: #fff;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
  .me-progress-step .icon-error:before {
    width: 100%;
    height: 2px;
    transform: scaleY(0.5);
  }
  .me-progress-step .icon-error:after {
    width: 2px;
    height: 100%;
    transform: scaleX(0.5) translateZ(0);
  }

  /* 竖线 */
  .me-progress-step .line {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    width: 2px;
    height: 0;
    background-color: #f0f0f0;
    transition: height 500ms ease-out;
  }
  .me-progress-item:last-child .me-progress-step .line {
    display: none;
  }
  .me-progress-content {
    margin-left: 8%;
    width: 92%;
  }
</style>
