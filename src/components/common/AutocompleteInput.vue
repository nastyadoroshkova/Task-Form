<template>
  <div :class="['input-wrapper', className]">
    <label
      :for="id"
      class="label"
    >
      {{title}}
    </label>
    <VueGoogleAutocomplete
      ref="address"
      id="map"
      classname="input"
      placeholder=""
      v-on:placechanged="getAddressData"
    />
    <div v-if="errors.length" class="error">{{errors[0]}}</div>
  </div>
</template>
<script>
  import VueGoogleAutocomplete from 'vue-google-autocomplete';

  export default {
    title: 'AutocompleteInput',
    props: {
      id: {
        type: String,
        default: '',
      },
      value: {
        type: Object,
        default: null,
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
        default: ()=> [],
      },
    },
    components: {
      VueGoogleAutocomplete
    },
    data() {
      return {
        content: this.value,
        address: '',
      }
    },
    mounted() {
      new window.google.maps.places.Autocomplete(
        this.$refs.search
      );
    },
    methods: {
      handleInput () {
        this.$emit('input', this.content)
      },
      getAddressData(addressData) {
        this.$emit('input', addressData);
      },
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