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
        break;
      case "1":
        Icon = <LowIcon />;
        break;
      case "2":
        Icon = <MediumIcon />;
        break;
      case "3":
        Icon = <HighIcon />;
        break;
      case "4":
        Icon = <UrgentIcon />;
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
