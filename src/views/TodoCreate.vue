<template>
  <div>
    <TodoForm :todo="todo" @processTodo="createTodo"></TodoForm>
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";
import { mapActions } from "vuex";

export default {
  components: { TodoForm },
  data() {
    return {
      todo: {
        id: null,
        text: "",
        done: false,
      },
    };
  },
  methods: {
    ...mapActions("todos", ["addTodo"]),

    createTodo(todo) {
      this.addTodo(todo).then(() => {
        this.$router.push("/todos");
      });
    },
  },
};
</script>

<style></style>
