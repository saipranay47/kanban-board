import React from "react";
import "../../styles/Column.css";
import Card from "./Card";
import {
  UrgentIcon,
  MediumIcon,
  HighIcon,
  LowIcon,
  DotsIcon,
  TodoIcon,
  CancelIcon,
  DotedCircleIcon,
  ProgressIcon,
  CompletedIcon,
  PlusIcon,
} from "../Icons";
import Avatar from "../Avatar";
const Column = ({ title, cards, groupby }) => {
  let Icon;
  console.log(groupby);

  if (groupby == "priority") {
    switch (title) {
      case "0":
        Icon = <DotsIcon />;
        title = "No priority"
        break;
      case "1":
        Icon = <LowIcon />;
        title = "Low"
        break;
      case "2":
        Icon = <MediumIcon />;
        title = "Medium "
        break;
      case "3":
        Icon = <HighIcon />;
        title = "High "
        break;
      case "4":
        Icon = <UrgentIcon />;
        title = "Urgent "
        break;
      default:
        break;
    }
  } else if (groupby == "status") {
    switch (title) {
      case "Todo":
        Icon = <TodoIcon />;
        break;
      case "In progress":
        Icon = <ProgressIcon />;
        break;
      case "Completed":
        Icon = <CompletedIcon />;
        break;
      case "Cancelled":
        Icon = <CancelIcon />;
        break;
      case "Backlog":
        Icon = <DotedCircleIcon />;
        break;
      default:
        break;
    }
  } else if (groupby == "user") {
    Icon = <Avatar userid={title}/>;
  }

  return (
    <div className="column">
      <div className="col_title_container">
        <div className="title_type">
          {Icon}
          <h3>{title}</h3>
          <p>{cards.length}</p>
        </div>
        <div className="options">
          <PlusIcon />
          <DotsIcon />
        </div>
      </div>
      {cards.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
