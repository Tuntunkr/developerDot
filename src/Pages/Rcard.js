import React from "react";
import { Col, Row, Button } from "react-bootstrap";

function Rcard({ data }) {
  const form1Data = JSON.parse(localStorage.getItem("form1-data"));
  const form2Data = JSON.parse(localStorage.getItem("form2-data"));
  console.log(form2Data);
  return (
    <>
      <div className="box">
        <div className="imgbox">
          <img className="img1" src={form2Data.imageurl} alt="/" />
        </div>
        <div className="contents">
          <div className="heading">
            <div>
              <h4>{form1Data.title}</h4>
              <h5>{form1Data.subheading}</h5>
            </div>

            <h6>{form1Data.category}</h6>
          </div>
          <h5>{form2Data.linktitle}
             {form2Data.link}
          </h5>
          <p>{form1Data.description}</p>
          <p>
            <span>{form1Data.tags}</span> Tag1, Tag2, tag3, tag4
          </p>
        </div>
      </div>
    </>
  );
}

export default Rcard;
