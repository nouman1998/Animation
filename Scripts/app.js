//Canvas Initialization

var canvas= document.getElementById('mycanvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c= canvas.getContext('2d');
var timer;
var count=0;


//Image 
var basket= new Image();
var ball= new Image();

window.onload=function()
{
c.drawImage(basket,2790,114,250,250);
c.stroke();
}
basket.src="Images/basket.png"



ball.onload=function()
{
// c.drawImage(ball,1551,1491,100,100);
// c.stroke();
}
ball.src="Images/ball.jpg"



window.addEventListener('keydown',function(e)
{
    // moveBall();
    // function animation(){
    // requestAnimationFrame(moveBall);}
    if(e.keyCode==13){
        this.console.log("e is running");
    timer=setInterval(moveBall,500)}
})

// animation();

window.addEventListener('click',(e)=>{
    // console.log("X: "+e.clientX+"   Y: " +e.clientY);
    
    c.drawImage(ball,e.clientX,e.clientY,100,100);
    c.stroke();
    })



//MoveBall Function
var x= 1351;
var y =1491;
var i =0;

function moveBall(){
  
//   var timer=  requestAnimationFrame(moveBall);
if((x+x>2748&&y+y<300) ){
    i=1;
x+=0;   
y+=400;
c.clearRect(0,0,canvas.width,canvas.height);
c.drawImage(basket,2790,114,250,250);
c.drawImage(ball,x,y,100,100);


}
else if(x+x<274||y+y>300 && i==0){

    // console.log(i+" :  "+x+"    "+y);
    c.clearRect(0,0,canvas.width,canvas.height);
    c.drawImage(basket,2790,114,250,250);
    c.drawImage(ball,x,y,100,100);
x+=170;
y-=160;

}
else{
  
    x+=20;
    y+=200;
    count++;
    c.clearRect(0,0,canvas.width,canvas.height);
    c.drawImage(basket,2790,114,250,250);
    c.drawImage(ball,x,y,100,100);
   
    if(count==5)
    {
        clearInterval(timer)
        // cancelAnimationFrame(timer);
    }
    
}

}