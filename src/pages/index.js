import React from "react"
import Header from "../components/header"
import "bootstrap/dist/css/bootstrap.min.css"
import "./global.css"

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="container-md">
        <div className="text-center py-3">
          <img
            className="rounded-circle"
            alt="Avatar"
            src="https://avatars0.githubusercontent.com/u/28719059"
            title="C'est moi 😊"
            width="200"
            height="200"
          />
        </div>
        <h2>Hello world!</h2>
        <p>
          My name is Allan Rodríguez, and I graduated with a Bachelor's Degree in Computer Engineering from UC Irvine in
          June of 2017. Ever since, I've been using my skills for work as well as on small personal projects for
          personal growth.
        </p>
        <p>
          The purpose of this website is to&nbsp;<del>show off how good I am at front-end development</del>&nbsp;develop
          the skills I've learned throughout my life and simultaneously promote myself to those who want to know more
          about me.
        </p>
        <p>
          I hope this website is informative to you. Pull up a chair, peruse some and enjoy. Thank you for visiting!
        </p>
      </div>
    </>
  )
}
