import React from "react";

const PersonalWork = () => {
    return (
        <div className="mt-2">
            <div className="title mb-2">Personal Work&nbsp;<span role="img" aria-label="personal">🤙</span></div>

            <p className="line">$&nbsp;<a href="http://www.my-football-bets.fr" className="text-white">My Football Bets</a></p>
            <p className="line text-white">---->&nbsp;As I like to bet on football matches and I don't like losing time, I was tired to spend 2 hours every week to choose which match I will bet on</p>
            <p className="line text-white">---->&nbsp;So I developed a web application that do it for me</p>
            <p className="line text-white">---->&nbsp;It uses a self-made algorithm to evaluate how many goals a match will have and what the result will be </p>
            <p className="line text-white">---->&nbsp;Then it calculates on which matches I have the best chances to win and chooses the first two ones</p><br/>
        </div>
    )
};

export default PersonalWork