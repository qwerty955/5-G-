window.onload=function (){
    document.getElementById("lo").className="del";
    document.getElementById("lod").className="del";
};
document.documentElement.style.setProperty("--x",window.innerWidth-60+"px");
let r = 1;
document.getElementById("m").onclick=function () {
    if (r==1){
        document.getElementById("l").style.left="-60px";
        r=2;
    }else if (r==2){
        document.getElementById("l").style.left="-320px";
        r=1;
    };
};
document.addEventListener("scroll",()=>{
    document.querySelectorAll("#cardtab").forEach((ev)=>{
        ev.style.left="0%";
    });


});
let vid = document.querySelectorAll("video");

vid.forEach((el)=>{
    el.addEventListener("pause",()=>{
        document.querySelector(".audio").play();
        let ff = document.querySelectorAll("video");
        ff.forEach((e)=>{
            e.pause();
        });
    })
    el.addEventListener('playing',function (ev){
        let f = document.querySelectorAll("video:not(."+ev.target.className+")");
        f.forEach((e)=>{
            document.querySelector(".audio").pause();
            e.pause();
        });
        
    });
});