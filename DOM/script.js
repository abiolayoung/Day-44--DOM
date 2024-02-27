
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

// document.body.style.background = "red";
// setTimeout(()=> document.body.style.background = "", 3000)

// tags form the tree structure.

// for(let i = 0; i<document.body.childNodes.length; i++){
//     alert(document.body.childNodes[i]);
// }

// for(let elem of document.body.children){
//     alert(elem)
// }

// Searching through the DOM
// get elements and queryselector
// dom navigation property are great when elements are close to each other, how to get the element if they are not close 

/*GET ELEMENT
1, document.getElementById- used to get the element by its ID*/

// let elem = document.getElementById('elem');
// elem.style.background = 'red'

// let elem = 5;
// alert(elem)

// let elements = document.querySelectorAll('ul>li:last-child');
// for(let elem of elements){
//     alert(elem.innerHTML)
// }

// Query selector
// document.querySelector - returns the first element for the given css selector
// element.matchs- this check if the element matches with the given css or not and it simple returns either true or false

// for (let elem of document.body.children){
//     if(elem.matches('a[href$="zip"]')){
//         alert("the archive reference:" + elem.href);
//     }
// }

// element.closest method-  the method element.closest look for the nearest ancestor that matches the css selector
// the method goes of by checking each of parents

let chapter = document.querySelector('.chapter')

alert(chapter.closest('.book')) // UL - It returns the immediate parent of the chapter class which is book class.
alert(chapter.closest('.contents')) // DIV - this will output the div item
alert(chapter.closest('h1')) // the is will print null becuase h1 does not have an ancestor- it is alone
