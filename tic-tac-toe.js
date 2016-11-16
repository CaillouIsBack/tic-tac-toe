// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function makeShape(){
  var circle = document.createElementNS(namespace, "circle")
  var canny = document.getElementById("game-board")
  circle.setAttribute("r", 30)
  circle.setAttribute("cx", 55)
  circle.setAttribute("cy", 65)
  circle.setAttribute("fill", "blue")
  canny.appendChild(circle)
}
makeShape()
function makeShape2(){
  var circl = document.createElementNS(namespace, "circle")
  var could = document.getElementById("game-board")
  circl.setAttribute("r", 30)
  circl.setAttribute("cx", 145)
  circl.setAttribute("cy", 65)
  circl.setAttribute("fill", "blue")
  could.appendChild(circl)
}
makeShape2()
