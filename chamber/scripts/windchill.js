const temp = parseFloat(document.getElementById("temperature").innerHTML);
const speed = parseFloat(document.getElementById("speed").innerHTML);
if (temp <= 50 && speed > 3.0) {
  let f =
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16);
  let windchill = f.toFixed(1);
  document.getElementById("windchill").innerHTML = windchill;
} else {
  document.getElementById("windchill").innerHTML = "N/A";
}
