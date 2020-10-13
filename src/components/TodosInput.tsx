import React, { useState } from "react";

import { Box, Button, Input } from "@chakra-ui/core";
import { Todo } from "../types";

interface Props {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
}

const TodosInput: React.FC<Props> = (props) => {
  const [value, setValue] = useState<string>("");
  return (
    <Box display="flex">
      <Input
        placeholder="Write a task..."
        value={value}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setValue(e.currentTarget.value)
        }
      />
      <Button
        onClick={() => {
          props.addTodo({
            id: `${props.todos.length - 1}-${value}`,
            task: value,
          });
          setValue("");
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default TodosInput;
