<template>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">{{ label }}</span>
      <span v-if="required" class="label-text-alt text-lg required">*</span>
    </label>
    <input
      :type="[date ? 'date' : 'text']"
      placeholder="Type here"
      :required="required"
      v-model.trim="filteredValue"
      class="input input-bordered w-full max-w-xs"
      :class="{ 'input-error': error }"
    />
    <span
      class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
      v-if="error"
    >
      Field {{ label }} must be filled
    </span>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    date: {
      type: Boolean,
      required: false
    }, 
    required: {
      type: Boolean,
      required: false,
    },
    error: {
      type: Boolean,
      required: false,
    },
    value: {
      type: String,
    },
  },
  computed: {
    filteredValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("update:value", newValue);
      },
    },
  },
};
</script>
<style scoped>
.required {
  color: #ff8484;
  height: 15px;
}
.label {
  padding-bottom: 0;
}
</style>
