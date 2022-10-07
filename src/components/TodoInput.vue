<template>
  <div>
    <div>
      <label for="email-address" class="sr-only">Task mới</label>
      <input
        @change="todoTextChange"
        v-bind:value="todoText"
        v-on:keyup.enter="ADD_TODONEW(todoText)"
        id="email-address"
        name="email"
        type="email"
        autocomplete="email"
        required
        class="
          relative
          block
          w-full
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
        placeholder="Task new"
      />
    </div>
    <button
      @click="ADD_TODONEW(todoText)"
      type="submit"
      class="
        group
        relative
        flex
        w-full
        justify-center
        my-10
        rounded-md
        border border-transparent
        bg-indigo-600
        py-2
        px-4
        text-sm
        font-medium
        text-white
        hover:bg-indigo-700
      "
    >
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <!-- Heroicon name: mini/lock-closed -->
      </span>
      Add
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),

    todoTextChange(e) {
      this.todoText = e.target.value;
    },

    ADD_TODONEW() {
      if (this.todoText.trim() !== "") {
        this.addTodo({
          id: v1(),
          title: this.todoText.trim(),
          done: false,
        });
        this.todoText = "";
      } else {
        this.todoText = "";
      }
    },
    
  },
};
</script>

<style scoped>
</style>

