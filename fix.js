// Get the sidebar element
const sidebar = document.querySelector('[data-drawer-type="secondary"]');

// Check the initial state of the sidebar based on data-sidebar-open attribute
if (sidebar.getAttribute('data-sidebar-open') === 'false') {
    sidebar.classList.add('hide'); // Hide sidebar initially if data-sidebar-open is false
}

// Function to toggle based on data-sidebar-open attribute
function toggleSidebar() {
    // Get the current state of the data-sidebar-open attribute
    const isOpen = sidebar.getAttribute('data-sidebar-open') === 'true';

    if (isOpen) {
        // If open, hide the sidebar
        sidebar.classList.add('hide');
        sidebar.setAttribute('data-sidebar-open', 'false'); // Set attribute to false
    } else {
        // If hidden, show the sidebar
        sidebar.classList.remove('hide');
        sidebar.setAttribute('data-sidebar-open', 'true'); // Set attribute to true
    }
}

// Call the toggle function to test
toggleSidebar();

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded, running the script');

    function darkenColor(color, factor) {
        console.log('Original color:', color); // Log the original color
        
        // Extract RGB values from the color string
        const rgb = color.match(/\d+/g).map(Number);
        console.log('Extracted RGB:', rgb); // Log the RGB values
        
        // Darken each channel by reducing its value by a factor
        const darkenedRgb = rgb.map(value => Math.max(Math.floor(value / factor), 0));
        console.log('Darkened RGB:', darkenedRgb); // Log the darkened RGB values
        
        // Return the new darkened color as rgb
        return `rgb(${darkenedRgb.join(", ")})`;
    }

    const elements = document.querySelectorAll('.export-highlight');
    
    // Log how many elements were found with the class .export-highlight
    console.log('Number of elements found:', elements.length);

    elements.forEach((element, index) => {
        // Log the element we're currently processing
        console.log(`Processing element ${index + 1}`);

        // Get the computed styles for the element
        const computedStyle = window.getComputedStyle(element);

        // Extract the left border color
        const borderColor = computedStyle.getPropertyValue('border-left-color');
        console.log('Border color:', borderColor); // Log the extracted border color

        if (borderColor) {
            // Darken the border color 4x
            const darkenedColor = darkenColor(borderColor, 4);

            // Log the darkened color before setting it as background
            console.log('Setting darkened color as background:', darkenedColor);

            // Set the darkened color as the background color with !important
            element.style.setProperty('background-color', darkenedColor, 'important');
        } else {
            console.log('No border-left-color found for this element.');
        }
    });
});
