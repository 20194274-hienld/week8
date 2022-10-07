<template>
  <input
    :id="todo.id"
    v-on:keyup.enter="updateTitle(todo)"
    v-bind:value="todoText"
    @change="todoTextChange"
    type="text"
    class="
      block
      w-80
      appearance-none
      rounded-none rounded-t-md
      border border-gray-300
      px-3
      py-2
      text-gray-900
      placeholder-gray-500
      focus:z-10
      focus:border-indigo-500
      focus:outline-none
      focus:ring-indigo-500
      sm:text-sm
    "
  />
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["todo"],

  data() {
    return {
      todoText: "",
    };
  },

  methods: {
    ...mapActions(["updateTodo"]),

    todoTextChange(e) {
      this.todoText = e.target.value;
    },

    updateTitle(todo) {
      todo.title = this.todoText;
      this.updateTodo(todo);
      this.$emit("close");
    },
  },

  mounted() {
    this.todoText = this.todo.title;
    document.getElementById(this.todo.id)?.focus();
  },
};
</script>
    
    <style scoped>
</style>
    