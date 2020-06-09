import React from "react"
import Header from "../components/header"
import "normalize.css"
import "bootstrap/dist/css/bootstrap-grid.css"
import "./global.css"

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="container-md">
        <div
          style={{
            fontSize: "5rem",
            fontWeight: "900",
            textAlign: "center"
          }}
        >
          Allan Rodríguez
        </div>
        <h2>Hello world!</h2>
        My name is Allan Rodríguez, and I'm 23 years old as of late 2018. I
        graduated with a Bachelor's Degree in Computer Engineering from UC
        Irvine in June of 2017. Ever since, I've been using my skills for work
        as well as on small personal projects, and to learn more outside of what
        school has taught me.
      </div>
    </>
  )
}
