// TAILWIND CONFIGURATION
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary-blue': '#4A90E2',
                'secondary-dark': '#1A202C',
                'card-bg': '#2D3748',
                'text-light': '#E2E8F0',
            }
        }
    }
}

// Simple JavaScript function to handle smooth scrolling to sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}