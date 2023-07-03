import React from "react";
import FirstGoal from "./FirstGoal";
import SecondGoal from "./SecondGoal";
import ThirdGoal from "./ThirdGoal";
import FourthGoal from "./FourthGoal";
const GoalList = () => {
  return (
    <ul>
      <li> <FirstGoal /></li>
      <li><SecondGoal /> </li>
      <li><ThirdGoal /> </li>
      <li><FourthGoal /></li>
    </ul>
  );
};

export default GoalList;
