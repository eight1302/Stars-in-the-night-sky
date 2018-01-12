/**
 * Created by Administrator on 2015/11/25.
 */
window.onload=function(){
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    canvas.width=1600;
    canvas.height=1000;
    var grd=ctx.createRadialGradient(canvas.width/2,canvas.height,0,canvas.width/2,canvas.height,canvas.height);
    grd.addColorStop(0.0,'#035');
    grd.addColorStop(1.0,'#16446d');

    ctx.fillStyle=grd;
    ctx.fillRect(0,0,1600,1000);
    for(var i=0;i<150;i++){
        var r=Math.random()*5+5;
        var x=Math.random()*canvas.width;
        var y=Math.random()*canvas.height*0.65;
        var a=Math.random()*360;
        ctx.shadowColor='#058';
        ctx.shadowOffsetX=2;
        ctx.shadowOffsetY=2;
        ctx.shadowBlur=2;
        drawStar(ctx,x,y,r,a);
    }
    fillMoon(ctx,2,100,100,100,30);
    drawLand(ctx);

}
function drawLand(ctx){
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,1000);
    ctx.bezierCurveTo(240,200,460,600,800,400);
    ctx.lineTo(1600,1000);
    ctx.lineTo(0,1000);
    ctx.closePath();
    var grd=ctx.createLinearGradient(0,400,0,1200);
    grd.addColorStop(0.0,'#1590ed');
    grd.addColorStop(1.0,'#3e53a4');
    ctx.fillStyle=grd;
    ctx.fill();
}
function drawStar(ctx,x,y,outerR,rot){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(rot/180*Math.PI);
    ctx.scale(outerR,outerR);

    starPath(ctx);

    ctx.fillStyle='#fff';
    //ctx.strokeStyle='#fd5';
    //ctx.lineJoin='round';
    //ctx.lineWidth=2;
    ctx.fill();
    //ctx.stroke();
    ctx.restore();
}
function starPath(ctx){
    ctx.beginPath();
    for(var i=0;i<=5;i++){
        ctx.lineTo(Math.cos((18+i*72)/180*Math.PI),
            -Math.sin((18+i*72)/180*Math.PI));//外圆半径为300，偏移值400
        ctx.lineTo(Math.cos((54+i*72)/180*Math.PI)*0.5,
            -Math.sin((54+i*72)/180*Math.PI)*0.5);
    }
    ctx.closePath();

}
function fillMoon(ctx,d,x,y,R,rot,fillcolor){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(rot/360*Math.PI);
    ctx.scale(R,R);
    moonPath(ctx,d);
    ctx.fillStyle=fillcolor||'#fff';
    ctx.fill();
    ctx.restore();
}
function moonPath(ctx,d){
    ctx.beginPath();
    ctx.arc(1,1,1,20*Math.PI,3*Math.PI,true);
    ctx.moveTo(0,1);
    ctx.arcTo(d,1,1,1,dis(1,1,d,1)/d);
}
function dis(x1,y1,x2,y2){
    return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}
 function myrefresh()
    {
       window.location.reload();
    }
    setTimeout('myrefresh()',1000); //指定1秒刷新一次