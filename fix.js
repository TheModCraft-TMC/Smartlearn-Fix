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
    function darkenColor(color, factor) {
        // Extract RGB values from the color string
        const rgb = color.match(/\d+/g).map(Number);

        // Darken each channel by reducing its value by a factor
        const darkenedRgb = rgb.map(value => Math.max(Math.floor(value / factor), 0));

        // Return the new darkened color as rgb
        return `rgb(${darkenedRgb.join(", ")})`;
    }

    document.querySelectorAll('.export-highlight').forEach((element) => {
        // Get the computed styles for the element
        const computedStyle = window.getComputedStyle(element);

        // Extract the left border color
        const borderColor = computedStyle.getPropertyValue('border-left-color');

        if (borderColor) {
            // Darken the border color 4x
            const darkenedColor = darkenColor(borderColor, 4);

            // Set the darkened color as the background color with !important
            element.style.setProperty('background-color', darkenedColor, 'important');
        }
    });
});
