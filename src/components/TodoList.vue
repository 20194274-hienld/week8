<template>
  <div>
    <TodoItemVue v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import TodoItemVue from "./TodoItem";

export default {
  components: {
    TodoItemVue,
  },

  methods: {},

  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },

  mounted() {
    this.$store.dispatch("getTodos");
  },
};
</script>

<style scoped>
</style>

