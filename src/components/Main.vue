<template>
  <main class="container mx-auto">
    <ul class="steps w-full">
      <li
        class="step"
        v-for="item in steps"
        :class="{ 'step-primary': step === item }"
      ></li>
    </ul>
    <section id="firstStep" class="flex flex-col border-2 px-12 border-red-100">
      <div class="steps px-6 h-80">
        <div v-if="step === 1" class="flex justify-start flex-col">
          <input-field
            :label="'First name'"
            required
            :id="'firstName'"
            :error="errors.firstName"
            v-model:value="firstName"
          />
          <input-field
            :label="'Last name'"
            :id="'lastName'"
            required
            :error="errors.lastName"
            v-model:value="lastName"
          />
        </div>
        <div v-if="step === 2" class="flex justify-start flex-col">
          <input-field
            :label="'Middle name'"
            :id="'middleName'"
            v-model:value="middleName"
          />
        </div>
        <div v-if="step === 3" class="flex justify-start flex-col">
          <input-field
            :label="'Date of birth'"
            :id="'dateBirth'"
            date
            v-model:value="dateOfBirth"
          />
        </div>
        <div v-if="step === 4">
          <toast />
          <div class="flex flex-col text-lg" id="result">
            <span>First name : {{ firstName }}</span>
            <span>Last name: {{ lastName }}</span>
            <span>Middle name: {{ middleName }}</span>
            <span>Date of birth: {{ dateOfBirth }}</span>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-end w-full">
        <button
          type="button"
          class="btn btn-primary"
          v-if="step !== 1"
          @click="prevStep()"
        >
          Prev
        </button>
        <button
          class="btn btn-primary ml-2"
          id="nextStep"
          @click="checkForm()"
          v-if="step !== 4"
        >
          Next
        </button>
      </div>
    </section>
  </main>
</template>
<script>
import InputField from "./InputField.vue";
import Toast from "./Toast.vue";
export default {
  name: "Main",
  components: {
    InputField,
    Toast,
  },
  data() {
    return {
      step: 1,
      steps: 4,
      firstName: "",
      lastName: "",
      middleName: "",
      dateOfBirth: "",
      errors: {
        firstName: false,
        lastName: false,
      },
    };
  },
  methods: {
    checkForm() {
      if (this.firstName && this.lastName) {
        this.step++;
        this.errors.firstName = false;
        this.errors.lastName = false;

        return;
      }

      if (!this.firstName) {
        this.errors.firstName = true;
      }
      if (!this.lastName) {
        this.errors.lastName = true;
      }
    },
    prevStep() {
      this.step--;
    },
  },
};
</script>
<style scoped>
.container {
  max-width: 1200px !important;
  min-height: 100vh;
}
</style>
