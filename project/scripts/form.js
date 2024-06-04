// Author: Adson Mettler do Nascimento

// Product array with corrected id field quotes
const routes = [
    {
      id: "bn-001",
      name: "Banff Route",
      avgRating: 4.5
    },
    {
      id: "vc-001",
      name: "Vancouver Route",
      avgRating: 4.7
    },
    {
      id: "tr-001",
      name: "Toronto Route",
      avgRating: 3.5
    },
    {
      id: "nf-001",
      name: "Niagara Falls Route",
      avgRating: 3.9
    },
    {
      id: "oq-001",
      name: "Old Quebec Route",
      avgRating: 5.0
    },
    {
        id: "bf-001",
        name: "Bay of Fundy Route",
        avgRating: 5.0
      }
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    // Populate the trip route dropdown
    const routeSelect = document.querySelector('select[name="route"]');
    routes.forEach(route => {
        const option = document.createElement('option');
        option.value = route.id;
        option.textContent = route.name;
        routeSelect.appendChild(option);
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
  