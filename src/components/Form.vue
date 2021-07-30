<template>
  <ValidationObserver
    v-slot="{ handleSubmit }"
  >
    <Loader :isLoader="isLoader"/>
    <form
      id="app"
      class="form"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <div class="title">Sign up</div>
      <div class="form-wrapper">
        <div class="row">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <Input
              id="firstName"
              title="First Name"
              type="text"
              v-model="firstName"
              :errors="errors"
            />
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <Input
              id="lastName"
              title="Last Name"
              type="text"
              v-model="lastName"
              class="row-item"
              :errors="errors"
            />
          </ValidationProvider>
        </div>
        <div class="row">
          <ValidationProvider rules="required|email" v-slot="{ errors }">
          <Input
            id="Email"
            title="Email"
            type="email"
            v-model="email"
            :errors="errors"
          />
          </ValidationProvider>
          <Checkbox
            id="isSendEmail"
            title="Send me email in plain text"
            v-model="isSendEmail"
            class="row-item"
          />
        </div>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <InputWithSelect
            id="personalPhoneNumber"
            title="Personal Phone Number"
            v-model="phoneNumber"
            :errors="errors"
          />
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <Input
            id="companyName"
            title="Company Name"
            type="text"
            v-model="companyName"
            :errors="errors"
          />
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <AutocompleteInput
            id="companyAddress"
            title="Company Address"
            v-model="companyAddress"
            :errors="errors"
          />
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <InputWithSelect
            id="companyPhoneNumber"
            title="Company Phone Number"
            v-model="companyPhoneNumber"
            :errors="errors"
          />
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <Input
            id="jobTitle"
            title="Job Title"
            type="text"
            v-model="jobTitle"
            :errors="errors"
          />
        </ValidationProvider>
        <div class="row">
          <ValidationProvider vid="confirm" rules="required" v-slot="{ errors }">
            <PasswordForm
              id="password"
              title="Password"
              type="text"
              v-model="password"
              :errors="errors"
            />
          </ValidationProvider>
          <ValidationProvider rules="required|confirmed:confirm" v-slot="{ errors }">
            <PasswordForm
              id="confirmPassword"
              title="Confirm Password"
              type="text"
              v-model="confirmPassword"
              class="row-item"
              :errors="errors"
            />
          </ValidationProvider>
        </div>
        <ValidationProvider :rules="{ required: { allowFalse: false } }" v-slot="{ errors }">
          <Checkbox
            id="isAcceptPolicy"
            :isLink="true"
            title="Accept <a href='https://google.com' target='_blank'> Privacy Policy </a>"
            type="checkbox"
            v-model="isAcceptPolicy"
            :errors="errors"
          />
        </ValidationProvider>
        <div class="separator"/>
      </div>
      <div class="btn-wrapper">
        <input
          type="submit"
          class="submit-btn"
          value="Sign up"
        >
      </div>
    </form>
  </ValidationObserver>
</template>
<script>
  import Loader from './common/Loader';
  import Input from './common/Input.vue';
  import Checkbox from './common/Checkbox';
  import PasswordForm from './common/PasswordForm';
  import InputWithSelect from './common/InputWithSelect';
  import AutocompleteInput from './common/AutocompleteInput';

  export default {
    name: 'Form',
    components: {
      Input,
      Loader,
      Checkbox,
      PasswordForm,
      InputWithSelect,
      AutocompleteInput,
    },
    data() {
      return {
        errors: [],
        firstName: null,
        lastName: null,
        email: null,
        isSendEmail: false,
        phoneNumber: null,
        phoneNumberCountry: null,
        companyName: null,
        companyAddress: null,
        companyPhoneNumber: null,
        companyPhoneNumberCountry: null,
        jobTitle: null,
        password: null,
        confirmPassword: null,
        isAcceptPolicy: false,
        age: null,
        movie: null,
        address: '',
        isLoader: false,
        isSuccess: false
      }
    },
    methods: {
      onSubmit: function() {
        this.isLoader = true;
        setTimeout(()=>{
          this.isLoader = false;
          this.isSuccess = true;
        }, 5000);
      },
    }
  }
</script>
<style scoped>
  .form {
    width: fit-content;
    margin: 10% auto;
    background-color: #ffffff;
    padding-top: 45px;
  }

  .title {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.3px;
  }

  .form-wrapper {
    padding: 40px;
  }

  .separator {
    margin-top: 30px;
    border: 1px solid #DADADA;
  }

  .row {
    display: flex;
    align-items: center;
  }

  .row-item {
    margin-left: 30px;
  }

  .submit-btn {
    min-width: 270px;
    min-height: 42px;
    background-color: #E9C864;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.2px;
  }

  .btn-wrapper {
    padding: 0 40px 50px 40px;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
</style>
