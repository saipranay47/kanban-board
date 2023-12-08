import React from "react";
import "../../styles/Card.css";
import { UrgentIcon, MediumIcon, HighIcon, LowIcon, DotsIcon } from "../Icons";
function Card({ task }) {
  let Icon;

  switch (task.priority) {
    case 0:
      Icon = <DotsIcon />;
      break;
    case 1:
      Icon = <LowIcon />;
      break;
    case 2:
      Icon = <MediumIcon />;
      break;
    case 3:
      Icon = <HighIcon />;
      break;
    case 4:
      Icon = <UrgentIcon />;
      break;
    default:
      Icon = <DotsIcon />;
      break;
  }
  return (
    <div className="card">
      <div className="card_top">
        <p className="id">{task.id}</p>
        <div className="user">
          <img src="https://i.pravatar.cc/300" alt={task.userId} />
          <div className="dot"></div>
        </div>
      </div>
      <p className="title">{task.title}</p>
      <div className="tags">
        <button className="priority tag">{Icon}</button>
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
