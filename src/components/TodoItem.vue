<template>
  <div class="p-4 grid grid-cols-6 gap-4 justify-between items-center">
    <input
      :id="'checkbox' + todo.id"
      type="checkbox"
      v-model="todo.done"
      @change="checkboxChange"
      class="h-5 w-5"
    />

    <div
      :id="'div' + todo.id"
      v-if="!editing"
      @click="toggleEditing"
      class="font-serif col-start-2 col-span-4"
    >
      {{ todo.title }}
    </div>

    <TodoEditVue
      v-else
      :todo="todo"
      @close="toggleEditing"
      class="col-start-2 col-span-4"
    />

    <button @click="deleteTodo(todo.id)" class="btn red">Delete</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TodoEditVue from "./TodoEdit";

export default {
  components: {
    TodoEditVue,
  },
  props: ["todo"],
  data() {
    return {
      editing: false,
      done: false,
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),

    toggleEditing() {
      if (
        !document
          .getElementById("div" + this.todo.id)
          ?.classList.contains("line-through")
      ) {
        this.editing = !this.editing;
        if (this.editing) {
          document
            .getElementById("checkbox" + this.todo.id)
            .setAttribute("disabled", true);
        } else {
          document
            .getElementById("checkbox" + this.todo.id)
            .removeAttribute("disabled");
        }
      }
    },

    checkboxChange() {
      this.done = !this.done;
      if (
        document
          .getElementById("div" + this.todo.id)
          ?.classList.contains("line-through")
      ) {
        document
          .getElementById("div" + this.todo.id)
          ?.classList.remove("line-through");
      } else {
        document
          .getElementById("div" + this.todo.id)
          ?.classList.add("line-through");
      }
      this.todo.done = this.done;
      this.updateTodo(this.todo);
    },
  },

  mounted() {
    this.done = this.todo.done;
    if (this.done === true)
      document
        .getElementById("div" + this.todo.id)
        .classList.add("line-through");
  },
};
</script>

<style>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.red {
  @apply hover:bg-red-500 bg-red-400 text-white;
}
</style>


