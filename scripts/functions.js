// JavaScript function to get the current year
// Author: Adson Mettler do Nascimento

// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// To update the copyright year in the footer
document.addEventListener("DOMContentLoaded", function() {
    var yearSpan = document.querySelector("#year span.highlight");
    if (yearSpan) {
        yearSpan.textContent = getCurrentYear();
    }
});

// Function to get the last modified date of the document
document.addEventListener("DOMContentLoaded", function() {
    var lastModifiedDate = document.lastModified;

    // Update the second paragraph in the footer with the last modified date
    var modifiedParagraph = document.querySelector("footer p:nth-of-type(2)");
    if (modifiedParagraph) {
        modifiedParagraph.textContent = "Last modified: " + lastModifiedDate;
    }
});

// HAMBURGER MENU function
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('nav .navigation');

    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });
});


// SCROLL ANIMATION function

const scrollers = document.querySelectorAll('.scroller');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller-inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}


// TIMELINE TABS SCREENS function

function openTab(event, tabId) {
    // Hide all tab content
    var tabPanes = document.getElementsByClassName('tab-pane');
    for (var i = 0; i < tabPanes.length; i++) {
        tabPanes[i].style.display = 'none';
        tabPanes[i].classList.remove('active');
    }

    // Remove 'active' class from all tab buttons
    var tabButtons = document.getElementsByClassName('tab-btn');
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    // Show the clicked tab's content and set the clicked button to active
    document.getElementById(tabId).style.display = 'block';
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Initially display the first tab's content and set the first tab button to active
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-btn').click();
});