import React from "react";
import "../../styles/Card.css";
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
} from "../Icons";
import { useUsers } from "../../utils/UsersContext";
function Card({ task }) {
  let PriorityIcon;

  switch (task.priority) {
    case 0:
      PriorityIcon = <DotsIcon />;
      break;
    case 1:
      PriorityIcon = <LowIcon />;
      break;
    case 2:
      PriorityIcon = <MediumIcon />;
      break;
    case 3:
      PriorityIcon = <HighIcon />;
      break;
    case 4:
      PriorityIcon = <UrgentIcon />;
      break;
    default:
      break;
  }

  let StatusIcon;

  switch (task.status) {
    case "Todo":
      StatusIcon = <TodoIcon />;
      break;
    case "In progress":
      StatusIcon = <ProgressIcon />;
      break;
    case "Completed":
      StatusIcon = <CompletedIcon />;
      break;
    case "Cancelled":
      StatusIcon = <CancelIcon />;
      break;
    case "Backlog":
      StatusIcon = <DotedCircleIcon />;
      break;
    default:
      break;
  }

  const users = useUsers();

  const getUserAvailability = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.available : false;
  };

  const isUserAvailable = getUserAvailability(task.userId);

  return (
    <div className="card">
      <div className="card_top">
        <p className="id">{task.id}</p>
        <div className="user">
          <img src="https://i.pravatar.cc/300" alt={task.userId} />
          <div className={`dot ${isUserAvailable ? "available" : ""}`}></div>
        </div>
      </div>
      <div className="task">
        {StatusIcon}
        <p className="title">{task.title}</p>
      </div>
      <div className="tags">
        <button className="priority tag">{PriorityIcon}</button>
        {task.tag.map((tag, index) => (
          <button className="tag" key={index}>
            {" "}
            <span className="circle"></span> {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Card;
