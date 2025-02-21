// Define a function to handle navigation between sections
function navigateTo(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Display the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    } else {
        console.error(`Section with id '${sectionId}' not found.`);
    }
}

// Event listeners for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const servicesLink = document.getElementById('services-link');
    const contactLink = document.getElementById('contact-link');

    homeLink.addEventListener('click', () => {
        navigateTo('home');
    });

    aboutLink.addEventListener('click', () => {
        navigateTo('about');
    });

    servicesLink.addEventListener('click', () => {
        navigateTo('services');
    });

    contactLink.addEventListener('click', () => {
        navigateTo('contact');
    });
});

// Example function for form submission handling (contact form)
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Example validation (you should implement more robust validation)
    if (name && email && message) {
        // Process form submission (send data to server or display a confirmation message)
        alert('Form submitted successfully!');
        // Clear form fields after submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

// Example AJAX request function for loading services dynamically
function loadServices() {
    // Simulating an AJAX request
    const servicesContainer = document.getElementById('services-list');
    servicesContainer.innerHTML = '<p>Loading...</p>';

    setTimeout(() => {
        const services = [
            { title: 'Interior Painting', description: 'We provide professional interior painting services.' },
            { title: 'Exterior Painting', description: 'Our experts handle exterior painting with attention to detail.' },
            { title: 'Color Consultation', description: 'We offer expert color consultation services.' }
        ];

        let servicesHTML = '';
        services.forEach(service => {
            servicesHTML += `<div class="service">
                                <h3>${service.title}</h3>
                                <p>${service.description}</p>
                            </div>`;
        });

        servicesContainer.innerHTML = servicesHTML;
    }, 1000); // Simulated delay
}

// Example usage of the functions
document.addEventListener('DOMContentLoaded', () => {
    // Load services dynamically when the page loads
    loadServices();
});
