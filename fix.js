// JavaScript Code
document.addEventListener('DOMContentLoaded', function() {
    // Get the sidebar element
    const sidebar = document.querySelector('[data-drawer-type="secondary"]');

    // Check if the sidebar exists
    if (!sidebar) {
        console.error('Sidebar element not found.');
        return; // Exit if sidebar is not found
    }

    // Function to toggle based on data-sidebar-open attribute
    function toggleSidebar() {
        // Get the current state of the data-sidebar-open attribute
        const isOpen = sidebar.getAttribute('data-sidebar-open') === 'true';
        console.log(`Sidebar is currently ${isOpen ? 'open' : 'closed'}.`);

        if (isOpen) {
            // If open, hide the sidebar
            sidebar.classList.add('hide');
            sidebar.setAttribute('data-sidebar-open', 'false'); // Set attribute to false
            console.log('Sidebar has been hidden.');
        } else {
            // If hidden, show the sidebar
            sidebar.classList.remove('hide');
            sidebar.setAttribute('data-sidebar-open', 'true'); // Set attribute to true
            console.log('Sidebar is now visible.');
        }
    }

    // Check the initial state of the sidebar based on data-sidebar-open attribute
    if (sidebar.getAttribute('data-sidebar-open') === 'false') {
        sidebar.classList.add('hide'); // Hide sidebar initially if data-sidebar-open is false
        console.log('Sidebar is hidden on initial load.');
    }

    const toggleSidebarButton = document.getElementById('toggle-sidebar-button');
    toggleSidebarButton.addEventListener('click', toggleSidebar);
    console.log('Toggle sidebar button event listener added.');

    function darkenColor(color, factor) {
        // Convert color to RGB format
        let rgb = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
        if (!rgb) {
            rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        }
        if (!rgb) {
            console.error('Invalid color format:', color);
            return color;
        }

        // Extract RGB values
        const r = parseInt(rgb[1], 16) || parseInt(rgb[1]);
        const g = parseInt(rgb[2], 16) || parseInt(rgb[2]);
        const b = parseInt(rgb[3], 16) || parseInt(rgb[3]);

        // Darken each channel by reducing its value by a factor
        const darkenedRgb = [
            Math.max(Math.floor(r / factor), 0),
            Math.max(Math.floor(g / factor), 0),
            Math.max(Math.floor(b / factor), 0)
        ];

        // Return the new darkened color as rgb
        const darkenedColor = `rgb(${darkenedRgb.join(", ")})`;
        console.log(`Darkened color: ${darkenedColor}`);
        return darkenedColor;
    }

    document.querySelectorAll('.export-highlight').forEach((element) => {
        // Get the computed styles for the element
        const computedStyle = window.getComputedStyle(element);

        // Extract the left border color
        const borderColor = computedStyle.getPropertyValue('border-left-color');
        console.log(`Border color for element: ${borderColor}`);

        if (borderColor) {
            // Darken the border color 2x (adjust factor value as needed)
            const darkenedColor = darkenColor(borderColor, 2);

            // Set the darkened color as the background color with !important
            element.style.setProperty('background-color', darkenedColor, 'important');
            console.log(`Background color set to: ${darkenedColor}`);
        } else {
            console.log('No border color found for element.');
        }
    });
});
