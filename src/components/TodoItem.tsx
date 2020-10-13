import React, { useState } from "react";

import { Box, Text, Button, Input } from "@chakra-ui/core";
import { BsFillTrashFill, BsWrench } from "react-icons/bs";
import { Todo } from "../types";

interface Props {
  todo: Todo;
  updateTodo: (id: string, todo: Todo) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<Props> = (props) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [updateValue, setUpdateValue] = useState<string>(props.todo.task);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={3}
    >
      <Box mr={8}>
        {!isUpdating ? (
          <Text>{props.todo.task}</Text>
        ) : (
          <Input
            w="100%"
            placeholder="Update your value!"
            value={updateValue}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setUpdateValue(e.currentTarget.value)
            }
          />
        )}
      </Box>
      <Box>
        <Button
          variant="outline"
          onClick={() => {
            setIsUpdating((isUpdate) => !isUpdate);
            if (isUpdating) {
              props.updateTodo(props.todo.id, {
                ...props.todo,
                task: updateValue,
              });
            }
          }}
          mr={2}
        >
          <BsWrench fill="green" />
        </Button>
        <Button
          variant="outline"
          onClick={() => props.deleteTodo(props.todo.id)}
        >
          <BsFillTrashFill fill="salmon" />
        </Button>
      </Box>
    </Box>
  );
};

export default TodoItem;
