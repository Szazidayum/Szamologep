var eredmeny=osszead(3,4)
console.log(eredmeny);

function osszead(a,b){
    console.log("összead");
    return a+b;
}

/*Függvénykifejezés */ /*a sorrend nem mindegy!!!*/
var osszeadas=function(a,b){
    return a+b;
}

console.log(osszeadas(5,6));

function ID(elem){
    return document.getElementById(elem);
}

window.addEventListener("load",init);
function init(){
    ID("szamol1").addEventListener("click",
    function(){
        osszead(3,4);
    }
    );
    ID("szamol2").addEventListener("click",
    function(){
        osszead(3,4);
    }
    );
    ID("szamol3").addEventListener("click",
    (a,b)=> {       /*a nyíl függvény olyan, mint a function*/
        osszead(3,4);
    });


/*((névtelek függvény)) */

/*  CALLBACK függvény nem azonnal futnak le, hanem csak akkor, amikor bekövetkezik valamilyen esemény */
/*Aszinkron hívás */

/*setTimeOut */
    //setTimeout(udvozles,2000);
    setTimeout(function(){console.log("hahó"),2000});

    /*setInterval */
    //setInterval(udvozles,2000);
    //setInterval(ora,2000);
    setInterval(function() /*vagy =>*/{
        var datumIdo=new Date();
        var ora=datumIdo.getHours();
        var perc=datumIdo.getMinutes();
        var mperc=datumIdo.getSeconds();
        console.log(ora+":"+perc+":"+mperc);
    }, 2000);
}

function udvozles(){
    console.log("hello");
}
/*
function ora(){
    var datumIdo=new Date();
    var ora=datumIdo.getHours();
    var perc=datumIdo.getMinutes();
    var mperc=datumIdo.getSeconds();
    console.log(ora+":"+perc+":"+mperc);
}
 */