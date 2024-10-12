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
    const menuButton = document.getElementById('menubutton');
    const navigation = document.querySelector('#animatemenu');

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


// FORM select function

// Service array with corrected id field quotes
const services = [
    {
      id: "wd-001",
      name: "Web Development",
      avgRating: 4.5
    },
    {
      id: "gd-001",
      name: "Graphic Design",
      avgRating: 4.7
    },
    {
      id: "mk-001",
      name: "Marketing Campaign",
      avgRating: 3.5
    },
    {
      id: "ve-001",
      name: "Video Editing",
      avgRating: 3.9
    },
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    // Populate the trip route dropdown
    const serviceSelect = document.querySelector('select[name="service"]');
    services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.id;
        option.textContent = service.name;
        serviceSelect.appendChild(option);
    });

    // Handle form submission
    const form = document.querySelector('form.wf1');
    form.addEventListener('submit', function(event) {
        // Collect form data
        const formData = {
            name: form.elements['fname'].value,
            email: form.elements['email'].value,
            phone: form.elements['phone'].value,
            route: form.elements['route'].value,
            people: form.elements['people'].value,
            date: form.elements['completeDate'].value,
            planned: Array.from(form.elements['planned']).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value),
            comment: form.elements['comment'].value
        };

        // Store form data in localStorage
        let requestCount = localStorage.getItem('requestCount') || 0;
        requestCount = parseInt(requestCount) + 1;
        localStorage.setItem('requestCount', requestCount);
        localStorage.setItem(`request_${requestCount}`, JSON.stringify(formData));

        // Allow form to submit and navigate to thanks.html
    });
});


// Equal Height

// window.addEventListener('load', () => {
//     const cards = document.querySelectorAll('.card-content');
//     let maxHeight = 3;

//     // Find the maximum height
//     cards.forEach(card => {
//         const cardHeight = card.offsetHeight;
//         if (cardHeight > maxHeight) {
//             maxHeight = cardHeight;
//         }
//     });

//     // Set all cards to the maximum height
//     cards.forEach(card => {
//         card.style.height = `${maxHeight}px`;
//     });
// });



// TESTIMONIALS CARDS Fetch the JSON data
fetch('./data/testimonials.json')
  .then(response => response.json())
  .then(data => {
    const testimonialsContainer = document.querySelector('.carousel'); // Fix selector to match HTML structure

    data.forEach(testimonial => {
      // Create card element
      const card = document.createElement('div');
      card.classList.add('testimonial-card');
      
      // Set inner HTML for the card in the requested sequence
      card.innerHTML = `
        <div class="testimonials-content">
          <img src="./images/${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
          <blockquote class="testimonial-quote">"${testimonial.quote}"</blockquote>
          <p class="testimonial-name"><strong>${testimonial.name}</strong>, ${testimonial.jobTitle} at ${testimonial.company}</p>
        </div>
      `;
      
      // Append card to the testimonials container
      testimonialsContainer.appendChild(card);
    });

    // Initialize the carousel functionality
    initCarousel();
  })
  .catch(error => {
    console.error('Error fetching testimonials:', error);
  });

// Carousel logic
function initCarousel() {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const carousel = document.querySelector('.carousel');
  const cards = carousel.children;
  let currentIndex = 0;
  const totalCards = cards.length;
  
  function showCard(index) {
    // Hide all cards
    for (let i = 0; i < totalCards; i++) {
      cards[i].style.display = 'none';
    }
    // Display the current card
    cards[index].style.display = 'block';
  }

  // Initial card display
  showCard(currentIndex);

  // Add event listeners for the carousel buttons
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalCards - 1 : currentIndex - 1;
    showCard(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === totalCards - 1) ? 0 : currentIndex + 1;
    showCard(currentIndex);
  });
}
