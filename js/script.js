// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-5-01-JS/sw.js", {
    scope: "/ICS20-5-01-JS/",
  })
}
/**
 * gets a random number and displays if you are right or wrong
 */
function myButtonClicked() {
  const num_one = parseInt(document.getElementById("hourly_rate").value)
  const num_two = parseInt(document.getElementById("hourly_rate").value)

  while ()
  document.getElementById("answer").innerHTML = "<p>Value is " + answer + "</p>"
}
