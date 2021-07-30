<template>
  <div :class="['input-wrapper', className]">
    <div class="row">
      <label
        :for="id"
        class="label"
      >
        {{title}}
      </label>
      <div :class="[currentScore, 'score']">
        {{ currentScore.toUpperCase() }}
      </div>
    </div>

    <div>
      <input
        :class="[`input-${currentScore}`, 'input']"
        type="password"
        v-model="password"
        @input="handleInput"
      >
      <password
        v-model="password"
        :secureLength="10"
        :showPassword="showPassword"
        :strength-meter-only="true"
        :toggle="false"
        @score="showScore"
      />
    </div>
    <div v-if="errors.length" class="error">{{errors[0]}}</div>
  </div>
</template>
<script>
  import Password from 'vue-password-strength-meter';

  export default {
    title: 'PasswordForm',
    components: { Password },
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
        password: null,
        showPassword: false,
        currentScore: '',
      }
    },
    methods: {
      handleInput () {
        this.$emit('input', this.password)
      },
      showScore (score) {
        switch (score) {
          case 0: this.currentScore = 'weak';
            break;
          case 2: this.currentScore = 'medium';
            break;
          case 3: this.currentScore = 'strong';
            break;
          default: this.currentScore = '';
        }
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

  .row {
    display: flex;
    justify-content: space-between;
  }

  .score {
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: 0.916667px;
    text-transform: uppercase;
  }

  .weak {
    color: red;
  }

  .medium {
    color: orange;
  }

  .strong {
    color: green;
  }

  .input-weak {
    border-bottom: 3px solid red;
  }

  .input-medium {
    border-bottom: 3px solid orange;
  }

  .input-strong {
    border-bottom: 3px solid green;
  }
</style>
<style>
  .Password__strength-meter {
    display: none;
  }
</style>