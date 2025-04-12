// Simple SPA navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // For now, only the home page exists
    const pages = {
        'home': document.getElementById('home-content'),
        // Future pages will be added here as you build them out
    };
    
    // Handle navigation clicks
    document.querySelectorAll('a[data-nav]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-nav');
            
            // If the page exists in our pages object
            if (pages[page]) {
                // Hide all pages
                Object.values(pages).forEach(pageEl => {
                    if (pageEl) pageEl.style.display = 'none';
                });
                
                // Show the selected page
                pages[page].style.display = 'block';
                
                // Update URL without page reload (for future use)
                history.pushState(null, null, '#' + page);
            } else {
                // For now, all navigation attempts go to home
                console.log('Page under construction. Staying on home page.');
            }
        });
    });
    
    // Set initial state
    const initialPage = window.location.hash.substring(1) || 'home';
    if (pages[initialPage]) {
        pages[initialPage].style.display = 'block';
    } else {
        pages['home'].style.display = 'block';
    }
});