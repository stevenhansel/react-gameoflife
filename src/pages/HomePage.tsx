import React, { useEffect, useState } from "react";

import { Box, Heading, Text } from "@chakra-ui/core";

import { Todo } from "../types";
import data from "../data/mock.json";

import Layout from "../components/Layout";
import TodosInput from "../components/TodosInput";
import TodoItem from "../components/TodoItem";

const HomePage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const initialTodos = data.todos.map((todo, index) => {
      return {
        ...todo,
        id: `${index}-${todo.task}`,
      };
    });
    setTodos(initialTodos);
  }, []);

  const addTodo = (todo: Todo) => setTodos(todos.concat(todo));
  const deleteTodo = (id: string) =>
    setTodos(todos.filter((todo) => todo.id !== id));
  const updateTodo = (id: string, todo: Todo) => {
    const newTodos = [...todos];
    newTodos[todos.findIndex((todo) => todo.id === id)] = todo;
    setTodos(newTodos);
  };

  return (
    <Layout>
      <Box>
        <Heading mb={8}>Create React App (CRA) Boilerplate</Heading>
        <Text fontSize={24} mb={4}>
          Todolist
        </Text>
        <TodosInput todos={todos} addTodo={addTodo} />
        <Box mt={8} ml={2} w="100%">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default HomePage;
