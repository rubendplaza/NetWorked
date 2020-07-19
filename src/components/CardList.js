import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ connections }) => {
  return (
    <div className="tc grid-item">
      {connections.map((user, i) => {
        return (
          <Card
            key={user.index}
            name={`${user.name.first} ${user.name.last}`}
            email={user.email}
            phone={user.phone}
            company={user.company}
          />
        );
      })}
    </div>
  );
};

export default CardList;
