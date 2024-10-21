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

// Function to darken the color by a percentage
function darkenColor(color, percent) {
    const rgb = color.match(/\d+/g);
    const r = Math.floor(rgb[0] * (1 - percent / 100));
    const g = Math.floor(rgb[1] * (1 - percent / 100));
    const b = Math.floor(rgb[2] * (1 - percent / 100));
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to apply the darker border-left color to the background for all .export-highlight elements
function applyDarkenedBorderColor() {
    const elements = document.querySelectorAll('.export-highlight');
    
    elements.forEach(element => {
        // Get the computed border-left color from each element
        const borderColor = window.getComputedStyle(element).borderLeftColor;
        const darkerColor = darkenColor(borderColor, 10); // Darken by 10%

        // Forcefully override the background color
        element.style.setProperty('background-color', darkerColor, 'important');
    });
}

// Automatically run when the document is loaded
document.addEventListener("DOMContentLoaded", applyDarkenedBorderColor);
