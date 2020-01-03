import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";
import "./InfoCards.scss";

const InfoCards = props => {
  return (
    <CardDeck style={{ padding: 30 }}>
      <Card>
        <CardImg
          id="Card"
          top
          width="100%"
          src="images/profile.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="text-center">About Me</CardTitle>
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
              <a href="Resume.pdf" download>
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
      <Card>
        <CardImg
          id="Card"
          top
          width="auto"
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
      </Card>
      <Card>
        <CardImg
          id="Card"
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
            <div>
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
            </div>
          </CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default InfoCards;
