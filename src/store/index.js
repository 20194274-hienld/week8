import { createStore } from 'vuex'

const STORAGE_KEY = 'vue-todo-app';

export default createStore({
  state: {
    todos: []
  },

  getters: {
  },

  actions: {
    getTodos({ commit }) {
      let todosLocal = JSON.parse(localStorage.getItem(STORAGE_KEY) || []);
      commit("SET_TODOS", todosLocal);
    },

    addTodo({ commit }, todo) {
      commit("ADD_TODO", todo);
    },

    deleteTodo({ commit }, id) {
      commit('DELETE_TODO', id);
    },
    
    updateTodo({ commit }, todo) {
      commit('UPDATE_TODO', todo)
    }
  },

  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos;
    },

    ADD_TODO(state, todo) {
      state.todos.push(todo);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
    },

    DELETE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo.id != id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
    },

    UPDATE_TODO(state, todo) {
      let index = state.todos.findIndex((t) => t.id == todo.id)
      if (index != -1) {
        state.todos[index] = todo;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
      }
    }
  },

  modules: {
  }
})
