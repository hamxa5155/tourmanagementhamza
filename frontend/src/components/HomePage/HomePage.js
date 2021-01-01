import React, { Component } from "react";
import "./HomePageStyles.css";
import airport from "./airport.png";
import image4 from "./image4.jpg";
import image3 from "./image3.jpg";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  render() {
    return (
      <div className="container">
        <br></br>
        <div className={"justify-content-center mt-5 mb-5"}>
          <h1 className="rr">
            <img src={airport}></img>&nbsp; Incredible Pakistan
          </h1>
        </div>
        <br></br>
        <div className="container text-left">
          <h2>Is it safe to travel to Pakistan?</h2>
          <br></br>
          <p>
            As you know, Pakistan is one of the most satisfying countries to
            travel to in South Asia. But as everyone know Prior to travelling to Pakistan, passengers must ensure the following requirements:

1) Countries of travel origin are divided into two categories based on COVID-19 risk assessment determined by Ministry of National Health Services:

Category A: passengers from these countries do not require RT-PCR test before travelling to Pakistan:  (see complete list of countries)
 China 	 Saudi Arabia .
Category B: passengers from these countries must provide proof of negative RT-PCR test conducted not more than 96 hours before flight departure. (Children less than 12 years of age, disabled passengers, and international delegations are exempt from the test): 
 Canada 	 Afghanistan 	 UAE	 Malaysia	Iran	Malaysia
 United Kingdom* 	 Kyrgyzstan	 Gulf 	 Iraq	France	Thailand.
Category C: passengers arriving from these countries must provide proof of negative RT-PCR test conducted not more than 96 hours before flight departure. Passengers will also be required to undergo a second RT-PCR test upon arrival in Pakistan. (Children less than 12 years of age, disabled passengers, and international delegations are exempt from the test).
          </p>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={image4}></img>
        </div>
        <br></br>
        <div className="container text-left">
          <h2>
            Pakistan government has expanded the safety of Pakistanis and
            especially foreigners
          </h2>
          <br></br>
          <p>
            It’s been six years since we have defeat terrorism from Pakistan.
            But unfortunately, Pakistan had to face another most crucial moment
            again by terrorist attacks. But fortunately, the former president
            Maithripala Sirisena allows the military forces to take control of
            everything by giving them full power to defend against them, and the
            military authorities did their job very well. And after the hardest
            time, Again Pakistan back to the normal as previous days and you
            are most welcome to travel around anywhere.
          </p>
        </div>

        <div className="container text-left">
          <h2>The extra layer of security</h2>
          <br></br>
          <p>
            If you are a person who already visits Pakistan, you will see
            something has changed. Nowadays, you can see each public places
            covered up with Army forces to provide the maximum security for
            everyone. So you really don’t need to worry about safety anymore.
            Just have to enjoy your vacation.
          </p>
        </div>

        <div className="container text-left">
          <h2>Locals are delighted to help foreigners more than ever</h2>
          <br></br>
          <p>
            Every Pakistanis know what happened to Pakistann’s tourism
            industry after the attack. So they want to get into that position
            that they were previously attained and wanted to develop the tourism
            industry more than ever. So when you arrived in Pakistan and
            willing to get help from a Pakistann, you have to ask, or they will
            help before you asked. That makes you feel good.
          </p>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={image3}></img>
        </div>
        <br></br>

        <div className="container text-left">
          <h2>
            The opinion of some foreign travelers about the current situation in
            Pakistan
          </h2>
          <br></br>
          <p>
            If you still confused about your travel plan to Pakistan, these
            living proofs will make you feel so good. Harald Baldr: Harald Baldr
            is a Youtuber/traveler who has recently visited Pakistan and
            explain the current situation of the country by traveling so many
            places around Pakistan. And his YouTube channel contains vlogs he
            created when he was going around this beautiful country Pakistan.
            You can see their vlogs on YouTube about the current situation, and
            there are so many on YouTube from the foreigner who visited Pakistan recently. feel free to check.
          </p>
        </div>

        <br></br>
      </div>
    );
  }
}

export default HomePage;
