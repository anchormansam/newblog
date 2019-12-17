import React from "react";
import {
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardSubtitle,
    CardBody
  } from "reactstrap";

const InfoAccordion = props => {
    return (
<div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          About Me
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
      <Card>
        <CardImg
          top
          width="50%"
          src="images/profile.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardSubtitle>
            “The road to success and the road to failure are almost exactly the
            same.” – Colin R. Davis
          </CardSubtitle>
          <CardText>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item">Full Stack Jr. Developer</li>
              <li className="list-group-item">
                Graduated Date: December 9th, 2019
              </li>
            </ul>
            <div className="card-body text-center">
              <a href="work.html" className="card-link">
                Resume
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          My Journey
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
      <Card>
        <CardImg
          top
          width="100%"
          src="images/awesome.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="text-center">Follow My Journey</CardTitle>
          <CardSubtitle className="text-center"></CardSubtitle>
          <CardText>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item">
                <a href="https://github.com/anchormansam">Github Page</a>
              </li>
              <li className="list-group-item">
                <a href="https://anchormansam.github.io/countdown-timer/">
                  Favorite Project: Countdown Timer
                </a>
              </li>
              <li className="list-group-item">
                <a href="https://bangachain.web.app/home" target="_blank">
                  Final Project: Bang A Chain
                </a>
              </li>
            </ul>
            <div className="card-body text-center">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Life outside of Work
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
      <Card>
        <CardImg
          top
          width="100%"
          src="images/worklife.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="text-center">Life outside of Work</CardTitle>
          <CardSubtitle>
            I am an avid Disc golfer who is classified as an Amateur player in
            the <abbr title="Professional Disc Golf Association">PDGA</abbr>. I
            have played in 107 career events in over 8 states so far. I have
            hosted 12 events over the past few years. I am active in the local
            scene with running charity events and leagues.
          </CardSubtitle>
          <CardText>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item">
                <a href="https://www.pdga.com/player/55572" target="_blank">
                  PDGA Profile
                </a>
              </li>
            </ul>
            <div className="card-body text-center">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>

      </div>
    </div>
  </div>
</div>

    );
}

export default InfoAccordion;