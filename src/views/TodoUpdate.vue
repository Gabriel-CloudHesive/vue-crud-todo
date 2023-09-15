<template>
  <div v-if="selectedTodo">
    <TodoForm
      :todo="selectedTodo"
      @processTodo="updateSelectedTodo"
      :todoSubmit="Update"
    ></TodoForm>
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: { TodoForm },
  computed: {
    ...mapState("todos", ["selectedTodo"]),
  },
  methods: {
    ...mapActions("todos", ["updateTodo"]),

    updateSelectedTodo(todo) {
      this.updateTodo(todo).then(() => {
        this.$router.push("/todos");
      });
    },
  },
};
</script>

<style></style>
