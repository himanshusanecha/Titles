
var btn = document.getElementById("button");
btn.addEventListener("click",function(){
    // Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

    var res = document.getElementById("text").value;
    var text = res.toLowerCase();
    if(text=="akshita")
    {
        $("#myModal").modal();
        var btn1 = document.getElementById("close");
        btn1.addEventListener("click",function(){
            var card1 = document.getElementById("card1");
            card1.style.display = "block";
        });
        
        
    }
    if(text=="keshav")
    {
        $("#myModal1").modal();
    }
    if(text=="preeti")
    {
        $("#myModal2").modal();
    }
    if(text=="abhimanyu")
    {
        $("#myModal3").modal();
    }
    if(text=="anjali")
    {
        $("#myModal4").modal();
    }
    
});
