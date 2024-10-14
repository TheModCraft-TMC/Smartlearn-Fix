
    function darkenColor(color, percent) {
        const rgb = color.match(/\d+/g);
        const r = Math.floor(rgb[0] * (1 - percent / 100));
        const g = Math.floor(rgb[1] * (1 - percent / 100));
        const b = Math.floor(rgb[2] * (1 - percent / 100));
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Apply the darker border-left color to the background
    document.addEventListener("DOMContentLoaded", function() {
        const element = document.querySelector('.export-highlight');
        
        if (element) {
            // Get the computed border-left color from the element
            const borderColor = window.getComputedStyle(element).borderLeftColor;
            const darkerColor = darkenColor(borderColor, 10); // Darken by 10%

            // Set the darker color as the background color
            element.style.backgroundColor = darkerColor;
        }
    });
