<template>
  <div v-if="todos.length"></div>
  <b-alert v-else show variant="info">No Todos to show</b-alert>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
