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
  circl.setAttribute("fill", "green")
  could.appendChild(circl)
}
makeShape2()
function makeShape3(){
  var cic = document.createElementNS(namespace, "circle")
  var cick = document.getElementById("game-board")
  cic.setAttribute("r", 30)
  cic.setAttribute("cx", 235)
  cic.setAttribute("cy", 65)
  cic.setAttribute("fill", "blue")
  cick.appendChild(cic)
}
makeShape3()
function makeShape4(){
  var c = document.createElementNS(namespace, "circle")
  var m = document.getElementById("game-board")
  c.setAttribute("r", 30)
  c.setAttribute("cx", 55)
  c.setAttribute("cy", 155)
  c.setAttribute("fill", "green")
  m.appendChild(c)
}
makeShape4()
function makeShape5(){
  var a = document.createElementNS(namespace, "circle")
  var b = document.getElementById("game-board")
  a.setAttribute("r", 30)
  a.setAttribute("cx", 145)
  a.setAttribute("cy", 155)
  a.setAttribute("fill", "blue")
  b.appendChild(a)
}
makeShape5()
function makeShape6(){
  var d = document.createElementNS(namespace, "circle")
  var e = document.getElementById("game-board")
  d.setAttribute("r", 30)
  d.setAttribute("cx", 235)
  d.setAttribute("cy", 155)
  d.setAttribute("fill", "green")
  e.appendChild(d)
}
makeShape6()
function makeShape7(){
  var f = document.createElementNS(namespace, "circle")
  var g = document.getElementById("game-board")
  f.setAttribute("r", 30)
  f.setAttribute("cx", 55)
  f.setAttribute("cy", 245)
  f.setAttribute("fill", "blue")
  g.appendChild(f)
}
makeShape7()
function makeShape8(){
  var h = document.createElementNS(namespace, "circle")
  var i = document.getElementById("game-board")
  h.setAttribute("r", 30)
  h.setAttribute("cx", 145)
  h.setAttribute("cy", 245)
  h.setAttribute("fill", "green")
  i.appendChild(h)
}
makeShape8()
function makeShape9(){
  var j = document.createElementNS(namespace, "circle")
  var k = document.getElementById("game-board")
  j.setAttribute("r", 30)
  j.setAttribute("cx", 235)
  j.setAttribute("cy", 245)
  j.setAttribute("fill", "blue")
  k.appendChild(j)
}
makeShape9()
