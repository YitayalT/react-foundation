import React from "react";
import GoalItem from "./GoalItem";
const goals = [
  {
    title: "Learn the basics of react",
    description:
      "I want to equip my self with a solid foundation of react - which is the \
        most beloved front-end library by developers!",
  },
  {
    title: "Doing Projects using react key concepts",
    description:
      "I am going to do some projects using react key concepts and principles",
  },
  {
    title: "Advance React",
    description:
      "In this goal I will learn advanced react concepts and best pracices",
  },
  {
    title:"Do a complet project",
          description:"Experiance what I learn before and do a complet project using react for \
        the front-end and firebase for the back-end"
  }
];
const GoalList = () => {
  return (
        <GoalItem goal = {goals}/>    
  );
};

export default GoalList;
