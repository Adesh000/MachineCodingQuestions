import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now().toString(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find(td => td.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(td => td.id !== action.payload);
    },
  },
});

export const {addTodo, updateTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
