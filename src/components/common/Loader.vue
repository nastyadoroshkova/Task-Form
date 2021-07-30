<template>
  <div
    v-if="isLoader"
    :class="className"
  >
    <div class="loader">
      <inline-svg
        :src="iconLoader"
        class="svg-icon"
      >
      </inline-svg>
    </div>
  </div>
</template>

<script>
  import iconLoader from '../../assets/icon-loader.svg';

  export default {
    name: 'Loader',
    props: {
      isLoader: {
        type: Boolean,
        default: false,
      },
      className: {
        type: String,
        default: 'loader-overlay',
      },
    },
    data() {
      return {
        iconLoader,
      };
    },
  };
</script>

<style scoped>
  .loader-overlay {
    background-color: rgba(0, 0, 0, 0.7);
    bottom: 0;
    cursor: pointer;
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 999;
  }

  .loader {
    animation: loader-animate 1.5s linear infinite;
    height: 80px;
    left: calc(50% - 40px);
    position: absolute;
    top: calc(50% - 40px);
    width: 80px;
  }

  @keyframes loader-animate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
