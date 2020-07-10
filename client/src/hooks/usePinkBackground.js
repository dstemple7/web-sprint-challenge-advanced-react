import React from 'react'

const PinkMe = () => {
  var body = document.getElementById("fullBody");
  body.classList.toggle('body_toggle')

  return (
    <button id="pinkButton">Pink Me</button>
  )
}

export default PinkMe