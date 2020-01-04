import React from "react";
import data from "../DataJSON/data.json";
import NavBar from "../Navbar/NavBar";

const preWorkTwo = data.PreWorkTwo;
const preWorkThree = data.PreWorkThree;
const preWorkFour = data.PreWorkFour;
const bootcampOne = data.BootcampOne;
const bootcampTwo = data.BootcampTwo;
const bootcampThree = data.BootcampThree;
const bootcampFour = data.BootcampFour;
const bootcampFive = data.BootcampFive;
const bootcampSix = data.BootcampSix;
const bootcampSeven = data.BootcampSeven;
const bootcampEight = data.BootcampEight;

export default class BlogPost extends React.Component {
  render() {
    return (
      <div>
      <NavBar />
      
    
        {preWorkTwo.map((p, i) => {
          return (
            <div key={i}>
              <div>
                <h1>{p.Title}</h1>
                <h5>{p.Question}</h5>
                <p>{p.Reply}</p>
              </div>
            </div>
          );
        })}
        {preWorkThree.map((p, i) => {
          return (
            <div key={i}>
              <div>
                <h1>{p.Title}</h1>
                <h5>{p.Question}</h5>
                <p>{p.Reply}</p>
              </div>
            </div>
          );
        })}
        {preWorkFour.map((p, i) => {
          return (
            <div key={i}>
              <div>
                <h1>{p.Title}</h1>
                <h5>{p.Question}</h5>
                <p>{p.Reply}</p>
              </div>
            </div>
          );
        })}
        {bootcampOne.map((b, i) => {
          return (
            <div key={i}>
              <div>
                <h1>{b.Title}</h1>
                <h5>{b.Question}</h5>
                <p>{b.Reply}</p>
              </div>
            </div>
          );
        })}
        {bootcampTwo.map((b, i) => {
          return (
            <div key={i}>
              <div>
                <h1>{b.Title}</h1>
                <h5>{b.Question}</h5>
                <p>{b.Reply}</p>
              </div>
            </div>
          );
        })}
        {bootcampThree.map((b, i) => {
          return (
            <div key={i}>
              <div>
                <h1>{b.Title}</h1>
                <h5>{b.Question}</h5>
                <p>{b.Reply}</p>
              </div>
            </div>
          );
        })}
        {bootcampFour.map((b, i) => {
          return (
            <div key={i}>
              <div>
                <h1>{b.Title}</h1>
                <h5>{b.Question}</h5>
                <p>{b.Reply}</p>
              </div>
            </div>
          );
        })}
        {bootcampFive.map((b, i) => {
          return (
            <div key={i}>
              <div>
                <h1>{b.Title}</h1>
                <h5>{b.Question}</h5>
                <p>{b.Reply}</p>
              </div>
            </div>
          );
        })}
        {bootcampSix.map((b, i) => {
          return (
            <div key={i}>
              <div>
                <h1>{b.Title}</h1>
                <h5>{b.Question}</h5>
                <p>{b.Reply}</p>
              </div>
            </div>
          );
        })}

      </div>
    );
  }
}
