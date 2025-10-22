import { createSelector } from "@reduxjs/toolkit";

export const selectTodos = (state) => state.todos;

export const selectCompletedTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => todo.completed)
);
