// function foo(){
//     var a = document.getElementById('abc').getElementsByTagName('p')
//     //   console.log(a)
//     // a[1].style.color = 'red'

//         for (var i = 0; i < a.length; i++){
//     a[i].style.backgroundColor = 'black'
//     a[i].style.color = 'white'
// }
// }



// setInterval=> bar bar chalauuuun ga => repeat
// setInterval(2 para meter accept karta hai 
    // 1 is fuction and 2 is mili seconds).......
// setTimeout=> 1 bar chalaoon ga
// clearInterval=> main apke setinterval ko rok duuunga


// setInterval(function(){
//     // console.log ('main kiya karron ga akar')
//     // document.write('habibi')
// }  ,1000 )



// function foo(){
//     document.write('saad')
// }
// setInterval(foo, 1000)


// function foo(){
//     document.write('saad')
// }
// setInterval(foo,1000)




// var a = 0                             //2
// var interval;

// interval = setInterval(function () {
//     a++
//     // console.log(a)
// document.write(a)
// }, 1000)

// setTimeout(function(){
//     clearInterval(interval)
// },5000)



var min = 0
var sec = 0
var msec = 0
var a = document.getElementById('msec')
var b = document.getElementById('sec')
var c = document.getElementById('min')
var interval;
function start(){
interval = setInterval(function(){
    msec++
    a.innerHTML = msec
    if(msec>=100){
        sec++
        b.innerHTML = sec
        msec = 0
    }
    else if(sec >=60){
        min++ 
        c.innerHTML = min
        sec = 0
    }
}, 10)
document.getElementById('rock').disabled = true
}

function pause(){
    clearInterval(interval)
    document.getElementById('rock').disabled = false
}

function khatam(){
    min = 0
    sec = 0
    msec = 0
    a.innerHTML = min
    b.innerHTML = sec
    c.innerHTML = msec
}











