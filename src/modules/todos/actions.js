import Vue from "vue";

export async function fetchTodos({ commit }) {
  try {
    const { data } = await Vue.axios({
      url: "/todos",
    });
    commit("todos/setTodos", data, { root: true });
  } catch (e) {
    commit("todos/setTodos", e.message, { root: true });
  } finally {
    console.log("The request to get all the todos has ended");
  }
}

export async function addTodo({ commit }, todo) {
  try {
    await Vue.axios({
      method: "POST",
      url: "/todos",
      data: {
        id: Date.now(),
        text: todo.text,
        done: false,
      },
    });
  } catch (e) {
    commit("todos/setTodos", e.message, { root: true });
  } finally {
    console.log("The request to create a todo has ended");
  }
}

export async function updateTodo({ commit }, todo) {
  try {
    await Vue.axios({
      method: "PUT",
      url: `/todos/${todo.id}`,
      data: {
        id: todo.id,
        text: todo.text,
        done: todo.done,
      },
    });
  } catch (e) {
    commit("todos/setTodos", e.message, { root: true });
  } finally {
    console.log("The request to update a todo has ended");
  }
}

export async function updateTodoStatus({ commit, dispatch }, todo) {
  try {
    await Vue.axios({
      method: "PUT",
      url: `/todos/${todo.id}`,
      data: {
        id: todo.id,
        text: todo.text,
        done: !todo.done,
      },
    });
    dispatch("fetchTodos");
  } catch (e) {
    commit("todos/setTodos", e.message, { root: true });
  } finally {
    console.log("The request to update a todo's status has ended");
  }
}

export async function removeTodo({ commit, dispatch }, id) {
  try {
    await Vue.axios({
      method: "DELETE",
      url: `/todos/${id}`,
    });
    dispatch("fetchTodos");
  } catch (e) {
    commit("todos/setTodos", e.message, { root: true });
  } finally {
    console.log("The request to update a todo's status has ended");
  }
}
