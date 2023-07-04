import React from "react";

const GoalItem = ({ goal }) => {
  return (
    <div>
      {goal.map((g) => {
        return (
          <ul key={g.title}>
            <li>
            <h2>{g.title}</h2>           
            <p>{g.description}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default GoalItem;
