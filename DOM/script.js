
// function sayHi(){
//     alert("Hello")
// }
// window.sayHi()

document.body.style.background = "red";
setTimeout(()=> document.body.style.background = "", 1000)

// BOM- Browser Object Model
alert(location.href)
if(confirm('Go to wikipedia')){
    location.href = "https://wikipedia.org"
}
