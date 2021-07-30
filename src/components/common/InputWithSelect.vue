<template>
  <div :class="['input-wrapper', className]">
    <label
      :for="id"
      class="label"
    >
      {{title}}
    </label>
    <div class="row">
      <select
        v-model="selectedValue"
        name="country"
        class="select"
        @change="onSelect"
      >
        <option
          v-for="item in countries"
          :key="item.name"
          :value="item.mask"
        >
          {{ item.name }}  ( {{ item.code}} )
        </option>
      </select>
      <TheMask
        :mask="selectedMask"
        v-model="content"
        type="text"
        :masked="true"
        class="input"
        :placeholder="selectedMask"
        @input="handleInput"
      >
      </TheMask>
    </div>
    <div v-if="errors.length" class="error">{{errors[0]}}</div>
  </div>
</template>
<script>
  import { TheMask } from 'vue-the-mask'
  import countries from 'countries-phone-masks';

  export default {
    title: 'InputWithSelect',
    components: {
      TheMask,
    },
    props: {
      id: {
        type: String,
        default: '',
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
        countries,
        selectedValue: countries[0].mask,
        selectedMask: countries[0].mask,
        content: '',
      }
    },
    methods: {
      onSelect() {
        this.selectedMask = this.selectedValue;
      },
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
    border: 1px solid #D8D8D8;
    box-sizing: border-box;
    border-radius: 0 5px 5px 0;
    border-left: none;
    min-height: 42px;
    width: 100%;
    min-width: 270px;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.2px;
  }

  .select {
    padding: 0 15px;
    margin-top: 8px;
    border: 1px solid #D8D8D8;
    border-radius: 5px 0 0 5px;
    min-height: 42px;
    width: 290px;
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

  .row {
    display: flex;
  }
</style>