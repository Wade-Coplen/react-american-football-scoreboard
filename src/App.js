//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [scoreHome, setHomeScore] = useState(0); 
  const touchDownHome = function(e) {
    setHomeScore(scoreHome + 7);
  };   
  const fieldGoal = function(e) {
    setHomeScore(scoreHome + 3);
  }; 
  const [scoreAway, setAwayScore] = useState(0);
  const touchDownAway = function(e) {
    setAwayScore(scoreHome + 7);
  };
  const fieldGoalAway = function(e) {
    setAwayScore(scoreHome + 3);
  }; 

  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            
            <div className="home__score">{scoreHome}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{scoreAway}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={touchDownHome} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={fieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={touchDownAway} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={fieldGoalAway} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
