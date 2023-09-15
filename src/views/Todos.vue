<template>
  <div class="mt-5">
    <b-row>
      <b-col cols="6">
        <h2>Pending todos</h2>
        <TodoList :todos="pending"></TodoList>
      </b-col>
      <b-col cols="6">
        <h2>Done todos</h2>
        <TodoList :todos="done"></TodoList>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TodoList from "@/components/TodoList.vue";

export default {
  methods: {
    ...mapActions("todos", ["fetchTodos"]),
  },
  components: { TodoList },
  mounted() {
    this.fetchTodos();
  },
  computed: {
    ...mapGetters("todos", ["pending", "done"]),
  },
};
</script>

<style></style>
