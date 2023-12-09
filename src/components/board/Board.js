// Board.js
import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown";
import TaskList from "./TaskList";
import { fetchData, fetchUsers } from "../../utils/api.js";
import "../../styles/Board.css";

const Board = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]); 
  const [groupingOption, setGroupingOption] = useState("status");
  const [sortOption, setSortOption] = useState(null);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await fetchData();
      const userData = await fetchUsers();
      setTasks(data);
      setUsers(userData);

      const savedState = loadViewStateFromURL();

      if (savedState) {
        console.log(savedState);
        setGroupingOption(savedState.groupingOption);
        setSortOption(savedState.sortOption);
      }
    };

    fetchDataAndSetState();
  }, []);

  const saveViewStateToURL = (groupingOption, sortOption) => {
    const queryParams = new URLSearchParams();
    queryParams.set("grouping", groupingOption);
    queryParams.set("sort", sortOption);

    const newURL = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.replaceState(null, "", newURL);
  };

  const loadViewStateFromURL = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const groupingOption = queryParams.get("grouping");
    const sortOption = queryParams.get("sort");

    return { groupingOption, sortOption };
  };

  const onDropdownChange = (newGroupingOption, newSortOption) => {
    setGroupingOption(newGroupingOption);
    setSortOption(newSortOption);
    saveViewStateToURL(newGroupingOption, newSortOption);
  };

  return (
    <div className="board">
      <Dropdown
        setGroupingOption={setGroupingOption}
        setSortOption={setSortOption}
        groupingOption={groupingOption}
        sortOption={sortOption}
        onChange={onDropdownChange}
      />
      <TaskList
        tasks={tasks}
        groupingOption={groupingOption}
        sortOption={sortOption}
        users={users}
      />
    </div>
  );
};

export default Board;
