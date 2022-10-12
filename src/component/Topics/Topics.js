import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

//import img from '../../images/bg.jpg'

const Topics = () => {
  const topicsLoad = useLoaderData();
  const topics = topicsLoad.data;
  // console.log(topics);
  return (
    <div>
      <div className="card bg-dark text-white">
        <img className="card-img img-fluid" src="images/skill.png" alt="Card" />
        <div className="card-img-overlay">
          <h3 className="text-center text-white card-title">
            Set goals for yourself..
          </h3>
          <p className="card-text text-center p-3 text-white">
            A skill set is a collection of skills and abilities. Each person has
            a different skill set depending on their interests, natural
            abilities, personal qualities and technical skills. Skills can
            expand your professional competency and allow you to perform your
            job well.This is very challenging in life.
          </p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row optionCard">
          {topics.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
