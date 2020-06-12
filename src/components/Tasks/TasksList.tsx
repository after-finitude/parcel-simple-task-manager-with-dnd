import React, { useState, useEffect, memo, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { ReactSortable } from "react-sortablejs";
import List from "@material-ui/core/List";

import { RootState } from "store/rootReducer";
import { TasksState, Task } from "store/tasks/types";
import { updateState } from "store/tasks/actions";

import { TasksListItem } from "components/Tasks/TasksListItem";

export const TasksList: React.FC = memo(() => {
  const dispatch = useDispatch();
  const storeTasks = useSelector<RootState, TasksState>(
    (state) => state.tasks,
    shallowEqual
  );
  const [tasks, setTasks] = useState<TasksState>(storeTasks);

  useEffect(() => {
    setTasks(storeTasks);
  }, [storeTasks]);

  const onEnd = useCallback(() => dispatch(updateState(tasks)), [
    dispatch,
    tasks,
  ]);

  return (
    <List>
      <ReactSortable onEnd={onEnd} list={tasks} setList={setTasks}>
        {tasks.map((task: Task) => (
          <TasksListItem
            key={task?.id}
            id={task?.id}
            title={task?.title}
            description={task?.description}
            closed={task?.closed}
          />
        ))}
      </ReactSortable>
    </List>
  );
});
