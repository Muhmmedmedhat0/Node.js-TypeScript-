import { RequestHandler } from "express";
import { Todo } from "../Models/todos";
let TODOS: Todo[] = []; // replace it with database

export const createTodo: RequestHandler = (req, res, next) => {
  const { text } = req.body as { text: string };
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);
  res.status(201).json([newTodo]);
};

export const getTodo: RequestHandler = (req, res, next) => {
  res.status(200).json(TODOS);
};

export const updateTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params as { id: string };
  const { text } = req.body as { text: string };
  const todo = TODOS.find((todo) => todo.id === id);
  if (!todo) {
    throw new Error("Todo not found");
  }
  todo.text = text;
  res.status(200).json([todo]);
};

export const deleteTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params as { id: string };
  TODOS = TODOS.filter((todo) => todo.id !== id);
  res.status(200).json(TODOS);
};
