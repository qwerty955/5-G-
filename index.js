window.onload=function (){
    document.getElementById("lo").className="del";
    document.getElementById("lod").className="del";
}
document.documentElement.style.setProperty("--x",window.innerWidth-60+"px")
let r = 1;
document.getElementById("m").onclick=function () {
    if (r==1){
        document.getElementById("l").style.left="-60px";
        r=2;
    }else if (r==2){
        document.getElementById("l").style.left="-320px";
        r=1;
    }
}