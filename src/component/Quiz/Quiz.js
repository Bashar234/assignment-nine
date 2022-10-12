import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";


const Quiz = () => {
  const quizsload = useLoaderData();
  const quizs = quizsload.data.questions;
  console.log(quizs);
  return (
    <div className="mt-5">
      <h3 className="text-center">{quizsload.data.name}</h3>
      <h5 className="text-center">Total: {quizs.length} quiz</h5>

      <div className="container">
        {quizs.map((quiz) => (
          <Questions key={quiz.id} quiz={quiz}></Questions>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
