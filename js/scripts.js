/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});






function filterPortfolio(category) {
    // Get all portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Show all items if category is 'all'
    if (category === 'all') {
        portfolioItems.forEach(item => {
            item.closest('.col-md-2, .col-md-3').style.display = 'block';
        });
        return;
    }
    
    // Filter items based on category
    portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        const parentCol = item.closest('.col-md-2, .col-md-3');
        
        if (itemCategory === category) {
            parentCol.style.display = 'block';
        } else {
            parentCol.style.display = 'none';
        }
    });
}

// Add this function to handle initial loading and URL parameters
function initializeFilter() {
    // Check if there's a category parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'all';
    
    // Set the select element to the correct value
    const filterSelect = document.getElementById('portfolioFilter');
    if (filterSelect) {
        filterSelect.value = category;
    }
    
    // Apply the initial filter
    filterPortfolio(category);
}

// Call initialize function when the page loads
window.addEventListener('load', initializeFilter);
