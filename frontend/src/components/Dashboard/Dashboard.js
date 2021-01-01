import React, { Component } from "react";
import "./DashboardStyles.css";
import loader from "./loader.gif";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image from "./image.jpg";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
    };
  }

  render() {
    return (
      <div className="q">
        <div className="container">
          <div className="container text-left">
            <br></br>
            <br></br>
            <h1 className="d">About Us</h1>
            <br></br>
            <div className="container text-center">
              <img src={image1}></img>
            </div>
            <br></br>
            <br></br>
            <p>
            The World Travel Guide is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back 30 years, with the online portal reaching its 19-year anniversary in 2018. Available in English, German, French and Spanish versions, the WTG provides detailed and accurate travel content designed to inspire global travellers. It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes weekly travel news, features and quizzes. Updated every day by a dedicated global editorial team, the portal logs 1 million+ unique users monthly.

<br></br>
              <br></br>
              Created to promote rapid economic development, through the
              development of foreign tourism, the Ceylon Tourist Board (CTB) was
              a statutory body that allowed greater freedom in decision making
              and flexibility in financial management.
              <br></br>
              <br></br>
              <br></br>
              <div className="container text-center">
                <img src={image2}></img>
              </div>
              <br></br>
              <br></br>
              The legislation also covered the establishment of a national
              holiday resort company, which planned various types of
              accommodation and resort areas. Moreover it included the setting
              up of an authority under the Tourist Board to manage and
              administer each resort. The Act conferred powers for the
              Protection of Highways and Places of Scenic Beauty and vested
              authority in the Ceylon Tourist Board for the Registration and
              Classification of Tourist Hotels and all other tourist services
              including travel agencies. The Tourist Development Act of 1968
              provided the Ceylon Tourist Board with the statutory authority to
              develop tourism on a planned and controlled basis
              <br></br>
              <br></br>
              <div className="container text-center">
                <img src={image}></img>
              </div>
              <br></br>
              What the papers say:

“A Godsend to the Globetrotter.” USA Today

“The best information bank on the internet for agents and travellers.” Mail on Sunday

“You’ll find all the answers here…..it’s packed full of useful information for travellers and it’s the sort of stuff you won’t find out at your local travel agent.” Internet Magazine

“Great for those short on holiday ideas or those wanting to find out more about a country before visiting.” The Sunday Times

“Most useful guide I have ever seen in my entire life.” Independent on Sunday

“Want a heads up on what the visa regulations are for visitors to India, how much duty-free you can bring back from France, what the main sights are in Yemen or when the best time of year to go to Jamaica is? It’s all available here, and quickly searchable by country or region.” The Independent

<br></br>
              <br></br>
      A THING OF BEATY IS JOY FOREVER      </p>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
