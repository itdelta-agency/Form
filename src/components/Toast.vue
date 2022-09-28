<template>
  <div
    class="alert absolute bottom-6 left-0 right-0 mx-auto justify-center w-1/4 alert-success shadow-lg opacity-80"
    v-if="isShow"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current flex-shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Success!</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        isShow: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isShow = false;
    }, 5000);
  },
};
</script>
<style>
  .alert {
    border-radius: 0;
  }
</style>