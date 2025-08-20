// localStorage.setItem('name','mudassir')
// localStorage.setItem('age','20')

// sessionStorage.setItem('name','mudassir')
// sessionStorage.setItem('department','bachleor of science')

// document.write(localStorage.getItem('name'),localStorage.getItem('age'))

// localStorage.clear('name')



// seesi/onStorage
// localStorage.clear


function signup(){
    var a  = document.getElementById('fname').value
    var b  = document.getElementById('lname').value
    var c  = document.getElementById('email1').value
    var d  = document.getElementById('pass1').value
localStorage.setItem('Fname',a)
localStorage.setItem('Lname',b)
localStorage.setItem('Email',c)
localStorage.setItem('Pass',d)
alert('data inserted successfully')


    // localStorage.setItem('first name',a)
}

























