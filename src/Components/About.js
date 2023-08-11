import React from "react";
import dks from "./dks.jpg"

const About = ()=>{

    return (
        <div className="About_container">
            <h1>About Me</h1>
            <img src={dks} alt="Dikesh-Pic"/>
            <div className ="para">
                <p>I always wanted to be a great writer, like Victor Hugo who wrote "Les Miserable", or like Roman Roland who wrote "John Christopher". They have influenced millions of people through their books. I also wanted to be a great psychologist, like William James or Sigmund Freud, who could read people’s mind.
                   I always wanted to be a great writer, like Victor Hugo who wrote "Les Miserable", or like Roman Roland who wrote "John Christopher". They have influenced millions of people through their books. I also wanted to be a great psychologist, like William James or Sigmund Freud, who could read people’s mind.
                </p>
                <p>I like country’s peace, I like metropolis’ noise; I like the beautiful west lake in Hangzhou, I like the flat cornfield in Champaign. I like delicious food and comfortable shoes; I like good books and romantic movies. I like the land and the nature, I like people. And, I like to laugh.</p>
                <hr />
            </div>
        </div>
    )
}

export default About;