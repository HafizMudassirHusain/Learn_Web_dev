//  CHAPTER DOMS

// console.log(document.childNodes[1] .childNodes[0].childNodes[0])


// hasAttribute=> jahan per function ho whan per atribute ka pta chalata hai
// SETATTRIBUTE=> addition of atributes
// GETATRIBUT=>atribute ka value btata hai

// function foo(){
//     var a = document.getElementById('fall')
//     var b = a.hasAttribute('class')
//     console.log(b)
// }


// function foo(){
//     var a = document.getElementById('fall')
//     var b = a.getAttribute('id')
//     console.log(b)
// }


// function foo(){
//     var a = document.getElementById('abc')
//     var b = a.setAttribute('class','may')
//     // console.log(b)
// }


// createelement=>essay hum html k under koi bhi tags banwa sakhtay hain js k under rehtay ho a
// createTextnode=> essay hum text print karwatay hain html k under js may rehtay hoa 
// appendChild =>{ eesay k zariye hum insert karwatay hain test ko kesi tags k under
// yooon samaj lain k kissi ko kesi oe ka child banwatay hain}

// appendChild concept
// var ce = document.createElement('p')
// var b = document.createTextNode ('hello world')
// ce.appendChild(b)
// console.log(ce)


// create simple 1 way chating
// function foo(){
//     var a = document.getElementById('abc')
//     var r = document.getElementById('bbb')
//     var c = document.createTextNode(a.value)
//     // console.log(c)
//     r.appendChild(c)
// }


// TO-DO-LIST
var a = document.getElementById('abc')

function bhejo(){
    var add = document.getElementById('addtodo')
    var li = document.createElement('li')
    var textinsert = document.createTextNode(add.value)
    li.appendChild(textinsert)
    a.appendChild(li)
    add.value = ''
    var del = document.createElement('button')
    var delbtn = document.createTextNode('delete')
    del.appendChild(delbtn)
    li.appendChild(del)
    del.setAttribute('onclick','delitem(this)')
    //LEC 30
    var editbtn = document.createElement('button')
    var editbtntext = document.createTextNode('Edite')
    editbtn.appendChild(editbtntext)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick','editfunc(this)')

}
function delitem(e){
  e.parentNode.remove()
}
function delall(){
    a.innerHTML = ''
}
function editfunc(e){
  // console.log(e.parentNode.firstChild.nodeValue)
  var a = prompt('enter the value which you wanna edit',e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue = a
}

// END OF TOODOOLIIIST































