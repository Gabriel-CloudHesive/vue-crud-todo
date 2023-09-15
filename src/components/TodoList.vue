<template>
  <div v-if="todos.length">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"></TodoItem>
  </div>
  <b-alert v-else show variant="info">No Todos to show</b-alert>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
