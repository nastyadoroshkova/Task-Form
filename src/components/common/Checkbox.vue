<template>
  <div :class="['checkbox-wrapper', className]">
    <div class="row">
      <input
        :id="id"
        v-model="content"
        type="checkbox"
        :name="id"
        class="checkbox"
        @input="handleCheck"
      >
      <label
        v-if="isLink"
        :for="id"
        class="label link"
        v-html="title"
      />
      <label
        v-else
        :for="id"
        class="label"
      >
        {{ title}}
      </label>
    </div>
    <div v-if="errors.length" class="error">{{errors[0]}}</div>
  </div>
</template>
<script>
  export default {
    title: 'Checkbox',
    props: {
      id: {
        type: String,
        default: '',
      },
      value: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: '',
      },
      className: {
        type: String,
        default: '',
      },
      isLink: {
        type: Boolean,
        default: false,
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
      handleCheck () {
        this.$emit('input', !this.content)
      }
    }
  }
</script>
<style scoped>
  .label {
    display: flex;
    align-items: center;
    margin-left: 7px;
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
  }

  .row {
    display: flex;
  }

  .checkbox {
    min-width: 16px;
    min-height: 16px;
    cursor: pointer;
  }

  .error {
    height: 20px;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    margin-left: 3px;
    align-items: center;
    letter-spacing: 0.3px;

    color: #FC0202;
  }
</style>
<style>
  .label a {
    color: #5B62FF;
    margin-left: 3px;
    text-decoration: underline;
  }
</style>