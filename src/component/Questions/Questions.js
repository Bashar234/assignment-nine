import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Questions = ({ quiz }) => {
  //console.log(quiz);
  const { question, options, correctAnswer } = quiz;
  const correctanswer = () => {
    toast.success("Wow your is correct!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const seeanswer = () => {
    toast.success(correctAnswer, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const Wronganswer = () => {
    toast.warn("Your answer is wrong!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const quizHandle = (option) => {
    if (option === correctAnswer) {
      correctanswer();
      // notify()
    } else {
      Wronganswer();
    }
  };
  //console.log(answer);
  return (
    <div className="my-3 p-2">
      <div>
        <h4 className=""> {question}</h4>
        <div className="text-end">
          <i onClick={seeanswer} className="fas eyeIcon fa-2x fa-eye"></i>
        </div>
        <div className="row">
          {options.map((option, index) => (
            <div
              key={index}
              className="col-md-5 col-lg-5 col-sm-12 card p-3 m-3"
            >
              <label>
                <input
                  onClick={() => quizHandle(option)}
                  type="radio"
                  name="option"
                />{" "}
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Questions;
