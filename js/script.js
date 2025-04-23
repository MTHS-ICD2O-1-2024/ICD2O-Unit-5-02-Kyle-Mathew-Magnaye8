// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: Apr 2025
// This file contains the JS functions for index.html

/**
 * This function checks the user’s choice (positive or negative),
 * generates a random number, and displays the result.
 */
// eslint-disable-next-line no-unused-vars
function checkNumber() {
  // input - check which radio button is selected
  const isPositive = document.getElementById("option-positive").checked
  let randomNumber

  // process - generate a random number depending on choice
  if (isPositive) {
    randomNumber = Math.floor(Math.random() * 9) + 1 // positive number 1–10
  } else {
    randomNumber = -1 * (Math.floor(Math.random() * 9) + 1) // negative number -1 to -10
  }

  // output - show the result
  document.getElementById("result").innerHTML =
    "<p>The random number is: <strong>" + randomNumber + "</strong></p>"
}
