import React from "react";
import Column from "./Column";

const TaskList = ({ tasks, groupingOption, sortOption }) => {
  const groupTasks = () => {
    const groupedTasks = {};

    tasks.forEach((task) => {
      let key;
      if (groupingOption === "user") {
        key = task.userId;
      } else {
        key = task[groupingOption];
      }
      if (!groupedTasks[key]) {
        groupedTasks[key] = [];
      }
      groupedTasks[key].push(task);
    });

    return groupedTasks;
  };

  const sortTasks = (tasksToSort) => {
    if (sortOption === "priority") {
      return tasksToSort.sort((a, b) => b.priority - a.priority);
    } else if (sortOption === "title") {
      return tasksToSort.sort((a, b) => a.title.localeCompare(b.title));
    }

    return tasksToSort;
  };

  const renderColumns = () => {
    const groupedTasks = groupTasks();

    return Object.keys(groupedTasks).map((key) => (
      <Column
        key={key}
        title={key}
        groupby={groupingOption}
        cards={sortTasks(groupedTasks[key])}
      />
    ));
  };

  return <div className="columns-container">{renderColumns()}</div>;
};

export default TaskList;
