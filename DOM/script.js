
// function sayHi(){
//     alert("Hello")
// }
// window.sayHi()

// document.body.style.background = "red";
// setTimeout(()=> document.body.style.background = "", 1000)

// BOM- Browser Object Model
// alert(location.href)
// if(confirm('Go to wikipedia')){
//     location.href = "https://wikipedia.org"
// }

// THE DOM TREE
/* the backbone of any html document is the tags, every html tag is an object, nested tags are the children on the enclosing one
the text inside a tag is an object as well, all these objects are assesible using javascript, 
and can be used to modify the page.
document.body is the object representing the body tag.*/

document.body.style.background = "red";
setTimeout(()=> document.body.style.background = "", 3000)

