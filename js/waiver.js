//Q1: Use an external JavaScript listener to apply the class “one-third” to all figures on the page.
const figures = document.querySelectorAll('figure');
for (const f of figures) {
    f.classList.add('one-third');
}

//Q2: Add an external eventListener to remove the footer when it is clicked.  There should not be a blank space where the footer used to be. Once the element is gone we won’t try to get it back without refreshing the page. 
const footer = document.querySelector('footer');
footer.addEventListener('click', () => {
    footer.style.display = 'none';
});

//Q3: Add an external eventListener to hide the 5th figure when it is double clicked.  There should be a blank space where the figure used to be.  Once the figure is gone we won’t try to get it back without refreshing the page.
const figure5th = document.querySelectorAll('figure')[4];
figure5th.addEventListener('dblclick', () => {
    figure5th.style.visibility = 'hidden';
});

//Q4: Use an external JavaScript listener to change the font of the first figure caption to Cursive when the mouse is over it and restore the font when the mouse leaves.   Note, you can not hardcode the “original” font - use JS to store it.
const fig1thcaption = document.querySelector('figure').querySelector('figcaption');

let nextFontFamily = 'Cursive';
function exchangeFontFamily() {
    let tmp = fig1thcaption.style.fontFamily;
    fig1thcaption.style.fontFamily = nextFontFamily;
    nextFontFamily = tmp;
}

fig1thcaption.addEventListener('mouseenter', exchangeFontFamily);
fig1thcaption.addEventListener('mouseleave', exchangeFontFamily);

//Q5: Use an external JavaScript listener to change the font of the first figure caption to Cursive when the figure caption is in focus and restore the font to “Times” when the focus state is over.   Note you must use JavaScript to accomplish this, not the CSS hover state.  You will need to use JavaScript to modify the html file to accomplish this task.
fig1thcaption.tabIndex = 0;
fig1thcaption.addEventListener('focus', exchangeFontFamily);
fig1thcaption.addEventListener('blur', exchangeFontFamily);