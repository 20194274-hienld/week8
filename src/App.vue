<template>
  <div
    class="
      flex
      min-h-full
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="w-full max-w-2xl space-y-8">
      <div>
        <h2
          class="
            mt-6
            text-center text-3xl
            font-bold
            tracking-tight
            text-gray-900
          "
        >
          To do list
        </h2>
      </div>
      <TodoInputVue />
      <TodoListVue />
    </div>
  </div>
</template>

<script>
import TodoInputVue from "./components/TodoInput";
import TodoListVue from "./components/TodoList";

export default {
  name: "App",
  components: {
    TodoInputVue,
    TodoListVue,
  },
};
</script>

<style src="./assets/styles.css"/>

