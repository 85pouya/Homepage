/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});


const console = document.getElementById("tests");
prettify.toHTML(run(), console);





var numbers;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


numbers = [0, 0, 0, 0, 0];

let element_total = document.getElementById('total');
element_total.innerText = numbers.reduce((a,b) => a+b, 0);


document.getElementById('add_number').addEventListener('click', (event) => {
  numbers.push(getNumberOrString(document.getElementById('number').value));
  numbers.shift();
  let element_total2 = document.getElementById('total');
  element_total2.innerText = numbers.reduce((a,b) => a+b, 0);

});




var fruits;


fruits = ['banana', 'mango', 'pineapple'];


document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  if (!!fruits.length) {
    let new_li = document.createElement('li');
    new_li.innerText = fruits.shift();

    element_list.appendChild(new_li);
  }

});




var images;


images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIbEWHSskQi6OVynRiPSqzV928FZScU_Piw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZo1NBNzS6FtF5ezS4c1SA1jbcsC9ksB5Hw&usqp=CAU', 'data:image/jpeg;base64,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'];

let element_pics = document.getElementById('pics');
images.push(images[0]);
element_pics.setAttribute("src", images.shift());


document.getElementById('previous').addEventListener('click', (event) => {
  let element_pics2 = document.getElementById('pics');
  images.unshift(images.slice(-1)[0]);
  element_pics2.setAttribute("src", images.pop());

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_pics3 = document.getElementById('pics');
  images.push(images[0]);
  element_pics3.setAttribute("src", images.shift());

});
