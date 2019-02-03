var lineCounter = 0;
var actualLine;
var actualLineX1 = 0;
var actualLineY1 = 0;
var svgcanvas;
var lineStretch;
var canvasrender;
var constructingLine = false;

window.onload = function(){

    svgcanvas = document.getElementById("svgcanvas");
    canvasrender = document.getElementById("canvasrender");
    window.addEventListener("mousedown",function(e){
        e.preventDefault();
        constructingLine = true;
        document.getElementById("coords").innerHTML = e.clientX + " , " + e.clientY;
        lineCounter++;
        console.log(lineCounter);
        svgcanvas.innerHTML += `<line id='line${lineCounter}' 
        x1='${e.clientX}' x2="${e.clientX}" y1='${e.clientY}'
        y2="${e.clientY}" style="stroke:rgb(255,0,0);stroke-width:2">`;
        actualLine =  document.getElementById(`line${lineCounter}`);
        
    });
    
    window.addEventListener("mousemove",function(e){
        e.preventDefault();
        document.getElementById("coords").innerHTML = e.clientX + " , " + e.clientY;
        
        if(constructingLine){
        actualLine.setAttribute("x2",e.clientX);
        actualLine.setAttribute("y2",e.clientY);
        }
    });
    
    window.addEventListener("mouseup",function(e){
        e.preventDefault();
        constructingLine = false;
        actualLine="";
    });
    
        window.addEventListener("touchstart",function(e){
        e.preventDefault();
        constructingLine = true;
        document.getElementById("coords").innerHTML = e.touches[0].clientX + " , " + e.touches[0].clientY;
        lineCounter++;
        console.log(lineCounter);
        svgcanvas.innerHTML += `<line id='line${lineCounter}' x1='${e.touches[0].clientX}' x2="${e.touches[0].clientX}" y1='${e.touches[0].clientY}' y2="${e.touches[0].clientY}" style="stroke:rgb(255,0,0);stroke-width:2">`;
        actualLine =  document.getElementById(`line${lineCounter}`);
        
    });
    
    window.addEventListener("touchmove",function(e){
        document.getElementById("coords").innerHTML = e.touches[0].clientX + " , " + e.touches[0].clientY;
        
        if(constructingLine){
        actualLine.setAttribute("x2",e.touches[0].clientX);
        actualLine.setAttribute("y2",e.touches[0].clientY);
        }
    });
    
    window.addEventListener("touchend",function(e){
        constructingLine = false;
        actualLine="";
    });
    
};