import React from "react";
import "../styles/Home.css";
import Search from "../assets/search_icons.svg";
import { Form, FormControl } from "react-bootstrap";
import Community from "./Community";
import Libraries from "./Libraries";
import Network from "./Network";
import NodeSoftware from "./NodeSoftware";
import Protocols from "./Protocols";
import Service from "./Service";
import Tools from "./Tools";
import { Typewriter } from "react-simple-typewriter";
import Foot from "./Foot";

function Home() {
  return (
    <>
      <div className="heresection">
        <div className="wrapper">
          <h1
            className="hands"
            style={{ paddingTop: "3rem", margin: "auto 0 " }}
          >
            Polkadot resources for you
            <span
              style={{
                color: "#7958D7",
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              <Typewriter
                loop
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={100}
                delaySpeed={1000}
                words={["Start ?", "Grow ?", "Launch ? ", "Build ?"]}
              />
            </span>
          </h1>
        </div>
        <p className="paragraph">
          Get all resources related to polkadot crypto at one place itself
        </p>
        <Form className="btn1">
          <FormControl
            type="search"
            placeholder="Search from multiple categories and resources"
            className="me-2"
            aria-label="Search"
          />

          <img src={Search} alt="/search_icons" className="search_icons" />
          {/* <span>|</span> */}
        </Form>
      </div>
      <h3 className="heads">
        <span className="span"> |</span>Community
        <span>
          {/* <Typewriter 
            loop
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={100}
            delaySpeed={1000}
          words={['Community...']}
          /> */}
        </span>
      </h3>
      {/* <!--image card layout start--> */}
      <Community />
      <h3 className="heads">
        <span className="span">|</span>Libraries
        <span>
          {/* <Typewriter 
            loop
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={100}
            delaySpeed={1000}
          words={['Libraries...']}
          /> */}
        </span>
      </h3>
      <Libraries />
      <h3 className="heads">
        <span className="span">|</span>Nerwork<span className="span"></span>
        <span
          style={{ color: "#7958D7", fontWeight: "bol", marginLeft: "10px" }}
        >
          {/* <Typewriter 
            loop
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={100}
            delaySpeed={1000}
          words={['Nerwork...']}
          /> */}
        </span>
      </h3>
      <Network />
      <h3 className="heads">
        <span className="span">|</span>Node Software
        <span className="span"></span>
        <span>
          {/* <Typewriter 
            loop
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={100}
            delaySpeed={1000}
          words={['Node Software...']}
          /> */}
        </span>
      </h3>
      <NodeSoftware />
      <h3 className="heads">
        <span className="span">|</span>Protocols<span className="span"></span>
        <span>
          {/* <Typewriter 
            loop
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={100}
            delaySpeed={1000}
          words={['Protocols...']}
          /> */}
        </span>
      </h3>
      <Protocols />

      <h3 className="heads">
        <span className="span">|</span>Services<span className="span"></span>
        <span>
          {/* <Typewriter 
            loop
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={100}
            delaySpeed={1000}
          words={['Services...']}
          /> */}
        </span>
      </h3>
      <Service />

      <h3 className="heads">
        <span className="span">|</span>Tools<span className="span"></span>
        <span className="span"></span>
        <span>
          {/* <Typewriter 
            loop
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={100}
            delaySpeed={1000}
          words={['Tools...']}
          /> */}
        </span>
      </h3>
      <Tools />

      {/* <!--image card layout end--> */}
      <Foot />
    </>
  );
}

export default Home;
