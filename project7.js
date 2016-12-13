var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  var newrect = document.createElementNS(namespace,"rect")
  newrect.setAttribute("x",x);
  newrect.setAttribute("y",y);
  newrect.setAttribute("width",size)
  newrect.setAttribute("height",size)
  newrect.setAttribute("fill",color);
  canvas.appendChild(newrect);
}

function drawCircle(x,y,size, color) {
  var newCircle = document.createElementNS(namespace,"circle")
  newCircle.setAttribute("x",x);
  newCircle.setAttribute("y",y);
  newCircle.setAttribute("width",size)
  newCircle.setAttribute("height",size)
  newCircle.setAttribute("fill",color);
  canvas.appendChild(newCircle);
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
})
