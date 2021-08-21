/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export type Itodo = {
  id: number;
  text: string;
  done: boolean;
  dueDate:string;
};

let initialTodos: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);
  const [nextIdState, setNextIdState] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const loadNextId = (initialTodos : Itodo[]) => {
    let MaxId = 0;
    for(let i=0; i<initialTodos.length; i++) {
      MaxId = Math.max(MaxId, initialTodos[i].id);
    }

    setNextIdState(MaxId + 1);
  }
  const incrementNextId = () => {
    setNextIdState((prevId) => prevId + 1);
  };

  const toggleTodo = (id: number) => {
    //@TODO
    const todoToggle = todoState.filter((todo:Itodo) => todo.id === id);
    todoToggle[0].done ? todoToggle[0].done = false : todoToggle[0].done = true;
    
    const undoList = todoState.filter((todo:Itodo) => todo.id !== id);
    const todoList = undoList.concat(todoToggle);
    
    todoList.sort( (o1, o2) => o1.id - o2.id);
    setTodoState(todoList);
  };

  const removeTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState.filter((todo: Itodo) => todo.id !== id)
    );
  };

  const createTodo = (todo: Itodo) => {
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextIdState
      })
    );
  };

  const loadData = () => {
    let data = localStorage.getItem("todos");
    if (data === undefined) data = "";
    initialTodos = JSON.parse(data!);
    if (initialTodos && initialTodos.length >= 1) {
      loadNextId(initialTodos);
    }
    setTodoState(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo
  };
};
