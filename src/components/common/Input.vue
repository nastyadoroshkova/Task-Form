<template>
  <div :class="['input-wrapper', className]">
    <label
      :for="id"
      class="label"
    >
      {{title}}
    </label>
    <input
      :id="id"
      v-model="content"
      :type="type"
      :name="id"
      class="input"
      @input="handleInput"
    >
    <div v-if="errors.length" class="error">{{errors[0]}}</div>
  </div>
</template>
<script>
  export default {
    title: 'Input',
    props: {
      id: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
      },
      value: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
      className: {
        type: String,
        default: '',
      },
      errors: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        content: this.value,
      }
    },
    methods: {
      handleInput () {
        this.$emit('input', this.content)
      }
    }
  }
</script>
<style scoped>
  .input-wrapper {
    margin-bottom: 25px;
  }

  .label {
    display: block;
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    align-items: center;
    letter-spacing: 0.916667px;
    text-transform: uppercase;
  }

  .input {
    padding: 0 15px;
    margin-top: 8px;
    background: #ffffff;
    border: 1px solid #D8D8D8;
    box-sizing: border-box;
    border-radius: 5px;
    min-height: 42px;
    min-width: 270px;
    width: 100%;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.2px;
  }

  .error {
    height: 20px;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    letter-spacing: 0.3px;

    color: #FC0202;
  }
</style>