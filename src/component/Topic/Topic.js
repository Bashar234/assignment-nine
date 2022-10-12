import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { logo, name, id } = topic;
  return (
    <div className="card bg-secondary p-2">
      <img className="img-fluid" src={logo} alt="" />
      <div className="d-flex text-primary align-items-center justify-content-between mt-2">
        <h4 className="">{name}</h4>
        <Link to={`../quiz/${id}`}>
          <button className="btn btn-primary btn-sm">
            Start Quiz{" "}
            <span className="ml-2">
              <i class="fas fa-arrow-right"></i>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Topic;
