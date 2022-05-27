import React from "react";
import { todoModel } from "../models/todoModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

interface Props {
  todo: todoModel;
  handleDelete: (todo: todoModel) => void;
}

const index = ({ todo, handleDelete }: Props) => {
  return (
    <div className="cards__card">
      <div className="cards__card__icons">
        <div className="cards__card__icons_i" onClick={() => alert("hablame")}>
          <FontAwesomeIcon icon={faPen} />
        </div>
        <div className="cards__card__icons_i" onClick={() => alert("hablame")}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div
          className="cards__card__icons_d"
          onClick={() => handleDelete(todo)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
      {todo.todo}
    </div>
  );
};

export default index;
