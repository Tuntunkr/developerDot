import React from "react";
import { data } from "../api/data";
import "../styles/Card1.css";

function Service() {
  const newData = data.filter((item) => item.categories.includes("services"));
  return (
    <>
      <section id="blog" className="blog_wrapper wrapper">
        <div className="container">
          <div className="row">
            {newData.map((data) => (
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="card p-0 border-0 rounded-0">
                  <img src={data.url} alt="/" />
                  <div className="blog-content">
                    <h5 className="text-white mb-4">{data.author}</h5>
                    <h6 className="text-white">By Admin - may 16, 2022</h6>
                    <p className="mt-2 text-white">{data.title}</p>
                    <a href="/" className="main-btn mt-2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
