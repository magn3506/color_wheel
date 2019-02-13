"use strict";

window.addEventListener("DOMContentLoaded", init);

// GLOBAL VARIABLES

let colorPicker = qsel("#colorWell");
let colorTheme = "Default";

let color_3;
let color_1;
let color_0;
let color_2;
let color_4;

let rbg;
let r;
let b;
let g;

let hsl;

let h;
let s;
let l;

let nCol_3;
let nCol_1;
let nCol_0;
let nCol_2;
let nCol_4;

let nHex_3;
let nHex_1;
let nHex_0;
let nHex_2;
let nHex_4;

let hexDigits = new Array(
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
);

// INIT FUNCTION START
function init() {
  //START COLORS
  findColor();
  //event listenter.
  colorPicker.addEventListener("input", findColor);

  document.querySelector("#color-select").addEventListener("change", getValue);
}

// QUERY SELECTER FUNCTION

function qsel(id) {
  let element = document.querySelector(id);

  return element;
}

// TODO: Tjek filter

function getValue() {
  colorTheme = this.value;

  colorThemeFilter();
}

// Filter of color themes
function colorThemeFilter() {
  if (colorTheme == "Default") {
    defColor();
  }

  if (colorTheme == "Analogous") {
    analogous();
  }
  if (colorTheme == "Monochromatic") {
    monochromatic();
  }
  if (colorTheme == "Complementary") {
    complementary();
  }
  if (colorTheme == "Compound") {
    compound();
  }
  if (colorTheme == "Shades") {
    shades();
  }
}

// find COLORS ghacnges i picker, SETS RGB

function findColor() {
  //HEX
  color_0 = colorPicker.value;

  //RBG
  rbg = HEX2RGB(colorPicker.value);

  r = rbg[0];
  b = rbg[1];
  g = rbg[3];

  //HSL
  hsl = RGB2HSL(rbg);

  h = hsl[0];
  s = hsl[1];
  l = hsl[2];

  colorThemeFilter();
}

// Complementary

function complementary() {
  //    hsl(350, 81%, 50%)
  color_3 = `hsl(${h + 90}, ${s}%, ${l}%)`;
  color_1 = `hsl(${h + 180}, ${s}%, ${l}%)`;
  color_0 = `hsl(${h}, ${s}%, ${l}%)`;
  color_2 = `hsl(${h + 60}, ${s}%, ${l}%)`;
  color_4 = `hsl(${h + 220}, ${s}%, ${l}%)`;
  printColor();
}

//Default
function defColor() {
  color_3 = `hsl(${h}, ${s}%, ${l}%)`;
  color_1 = `hsl(${h}, ${s}%, ${l}%)`;
  color_0 = `hsl(${h}, ${s}%, ${l}%)`;
  color_2 = `hsl(${h}, ${s}%, ${l}%)`;
  color_4 = `hsl(${h}, ${s}%, ${l}%)`;

  printColor();
}

//Shades
//Like Monochromatic, but S is different, where H and L are kept constant

function shades() {
  //    hsl(350, 81%, 50%)
  color_3 = `hsl(${h}, ${s - 40}%, ${l}%)`;
  color_1 = `hsl(${h}, ${s - 20}%, ${l}%)`;
  color_0 = `hsl(${h}, ${s}%, ${l}%)`;
  color_2 = `hsl(${h}, ${s + 20}%, ${l}%)`;
  color_4 = `hsl(${h}, ${s + 40}%, ${l}%)`;

  printColor();
}

//Compound
//A combination of complementary and analogous - you decide how many colors are complementary, and how many are analogous

function compound() {
  //    hsl(350, 81%, 50%)
  color_3 = `hsl(${h + 20}, ${s}%, ${l}%)`;
  color_1 = `hsl(${h + 180}, ${s}%, ${l}%)`;
  color_0 = `hsl(${h}, ${s}%, ${l}%)`;
  color_2 = `hsl(${h - 60}, ${s}%, ${l}%)`;
  color_4 = `hsl(${h - 40}, ${s}%, ${l}%)`;

  printColor();
}

//Triad
//Two colors are shifted 60 or 120 degrees from the base. You decide what to do with the two remaining colors

function triad() {
  //    hsl(350, 81%, 50%)
  color_3 = `hsl(${h - 120}, ${s}%, ${l}%)`;
  color_1 = `hsl(${h - 60}, ${s}%, ${l}%)`;
  color_0 = `hsl(${h}, ${s}%, ${l}%)`;
  color_2 = `hsl(${h + 120}, ${s}%, ${l}%)`;
  color_4 = `hsl(${h + 60}, ${s}%, ${l}%)`;

  printColor();
}

//

// Monochromatic
// L is different for each color. H and S are kept constant

function monochromatic() {
  color_3 = `hsl(${h}, ${s}%, ${l - 20}%)`;
  color_1 = `hsl(${h}, ${s}%, ${l - 10}%)`;
  color_0 = `hsl(${h}, ${s}%, ${l}%)`;
  color_2 = `hsl(${h}, ${s}%, ${l + 10}%)`;
  color_4 = `hsl(${h}, ${s}%, ${l + 20}%)`;

  printColor();
}

//Analogous
//H is shifted a few degrees for each color. S and L are kept constant

function analogous() {
  color_3 = `hsl(${h - 80}, ${s}%, ${l}%)`;
  color_1 = `hsl(${h - 40}, ${s}%, ${l}%)`;
  color_0 = `hsl(${h}, ${s}%, ${l}%)`;
  color_2 = `hsl(${h + 40}, ${s}%, ${l}%)`;
  color_4 = `hsl(${h + 80}, ${s}%, ${l}%)`;

  printColor();
}

// PRINST COLORS IN BOXES
function printColor() {
  qsel(".color_3").style.backgroundColor = color_3;
  qsel(".color_1").style.backgroundColor = color_1;
  qsel(".color_0").style.backgroundColor = color_0;
  qsel(".color_2").style.backgroundColor = color_2;
  qsel(".color_4").style.backgroundColor = color_4;

  getNewColorCode();
}

// GET NEW COLOR CODE FROM BOX 0-4

function getNewColorCode() {
  //RGB
  nCol_3 = qsel(".color_3").style.backgroundColor;
  nCol_1 = qsel(".color_1").style.backgroundColor;
  nCol_0 = qsel(".color_0").style.backgroundColor;
  nCol_2 = qsel(".color_2").style.backgroundColor;
  nCol_4 = qsel(".color_4").style.backgroundColor;

  //HEX
  nHex_3 = rgb2hex(nCol_3);
  nHex_1 = rgb2hex(nCol_1);
  nHex_0 = rgb2hex(nCol_0);
  nHex_2 = rgb2hex(nCol_2);
  nHex_4 = rgb2hex(nCol_4);

  //HSL

  setColorCode();
}

// PRINTS COLOR CODES

function setColorCode() {
  //RGB
  qsel(".rgb_val_3").textContent = nCol_3;
  qsel(".rgb_val_1").textContent = nCol_1;
  qsel(".rgb_val_0").textContent = nCol_0;
  qsel(".rgb_val_2").textContent = nCol_2;
  qsel(".rgb_val_4").textContent = nCol_4;

  //HEX
  qsel(".hex_val_3").textContent = nHex_3;
  qsel(".hex_val_1").textContent = nHex_1;
  qsel(".hex_val_0").textContent = nHex_0;
  qsel(".hex_val_2").textContent = nHex_2;
  qsel(".hex_val_4").textContent = nHex_4;

  //HSL
  qsel(".hsl_val_3").textContent = color_3;
  qsel(".hsl_val_1").textContent = color_1;
  qsel(".hsl_val_0").textContent = color_0;
  qsel(".hsl_val_2").textContent = color_2;
  qsel(".hsl_val_4").textContent = color_4;
}

// convert RBG to HSL -----------------------
// -------------------https://gmigdos.wordpress.com/2011/01/13/javascript-convert-rgb-values-to-hsl/------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------

function RGB2HSL(rgbArr) {
  var r1 = rgbArr[0] / 255;
  var g1 = rgbArr[1] / 255;
  var b1 = rgbArr[2] / 255;

  var maxColor = Math.max(r1, g1, b1);
  var minColor = Math.min(r1, g1, b1);
  //Calculate L:
  var L = (maxColor + minColor) / 2;
  var S = 0;
  var H = 0;
  if (maxColor != minColor) {
    //Calculate S:
    if (L < 0.5) {
      S = (maxColor - minColor) / (maxColor + minColor);
    } else {
      S = (maxColor - minColor) / (2.0 - maxColor - minColor);
    }
    //Calculate H:
    if (r1 == maxColor) {
      H = (g1 - b1) / (maxColor - minColor);
    } else if (g1 == maxColor) {
      H = 2.0 + (b1 - r1) / (maxColor - minColor);
    } else {
      H = 4.0 + (r1 - g1) / (maxColor - minColor);
    }
  }

  L = L * 100;
  S = S * 100;
  H = H * 60;
  if (H < 0) {
    H += 360;
  }
  var result = [H, S, L];
  return result;
}

// convert RBG to HSL -----------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------

// convert HEX to RGB -----------------------
// ----------------------https://gist.github.com/comficker/871d378c535854c1c460f7867a191a5a#file-hex2rgb-js---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------

function HEX2RGB(hex) {
  if (hex.charAt(0) === "#") {
    hex = hex.substr(1);
  }
  if (hex.length < 2 || hex.length > 6) {
    return false;
  }
  var values = hex.split(""),
    r,
    g,
    b;

  if (hex.length === 2) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = r;
    b = r;
  } else if (hex.length === 3) {
    r = parseInt(values[0].toString() + values[0].toString(), 16);
    g = parseInt(values[1].toString() + values[1].toString(), 16);
    b = parseInt(values[2].toString() + values[2].toString(), 16);
  } else if (hex.length === 6) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = parseInt(values[2].toString() + values[3].toString(), 16);
    b = parseInt(values[4].toString() + values[5].toString(), 16);
  } else {
    return false;
  }
  return [r, g, b];
}
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}
