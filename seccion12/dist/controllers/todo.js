"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const Todo_1 = require("../models/Todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new Todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Todo fue creado...', createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const todoID = req.params.id;
    const updatedText = req.body.text;
    const index = TODOS.findIndex(todo => todo.id === todoID);
    if (index < 0) {
        throw new Error('Todo no fue encontrado...');
    }
    TODOS[index] = new Todo_1.Todo(TODOS[index].id, updatedText);
    res.status(201).json({ message: 'Actualizado', updateTodos: TODOS[index] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoID = req.params.id;
    const index = TODOS.findIndex(todo => todo.id === todoID);
    if (index < 0) {
        throw new Error('Todo no fue encontrado');
    }
    TODOS.splice(index, 1);
    res.json({ message: 'Eliminado' });
};
exports.deleteTodo = deleteTodo;
