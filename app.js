// Application Data
const appData = {
  brandColors: {
    primaryDarkGreen: "#065F46",
    secondaryLightGreen: "#10B981",
    creamWhite: "#FDFCFB",
    deepCharcoal: "#111827",
    accentGold: "#FBBF24",
    neutralGray: "#6B7280"
  },
  menuItems: [
    {
      id: 1,
      name: "Cold Coffee",
      price: "₹79",
      description: "Chilled coffee served with ice cubes and a smooth creamy texture.",
      category: "Cold Drinks",
      image: "/public/3.jpg"
    },
    {
      id: 2,
      name: "Irish Cold Coffee",
      price: "₹99",
      description: "Refreshing cold coffee topped with a scoop of rich vanilla ice cream.",
      category: "Cold Drinks",
      image: "/public/1.jpg"
    },
    {
      id: 3,
      name: "Mango MilkShake",
      price: "₹199",
      description: "Milkshake infused with KitKat chocolate for a crunchy delight.",
      category: "Shakes",
      image: "/public/6.jpg"
    },
    {
      id: 4,
      name: "Cheese Popular",
      price: "₹199",
      description: "Creamy shake blended with Oreo cookies and chocolate syrup.",
      category: "Shakes",
      image: "/public/11.jpg"
    },
    {
      id: 5,
      name: "French Fries",
      price: "99",
      description: "Crispy golden fries served with ketchup.",
      category: "Snacks",
      image: "/public/20.jpg"
    },
    {
      id: 6,
      name: "Peri Peri Fries",
      price: "119",
      description: "Spicy peri peri seasoned fries with a tangy kick.",
      category: "Snacks",
      image: "/public/19.jpg"
    },
  ],
  cafeInfo: {
    name: "Enphoria Coffee",
    tagline: "Coffee Moments That Matter",
    address: "Atul Nagar, Warje, Pune, Maharashtra 411058",
    phone: "+91 7058231834, +91 7517023345",
    email: "hello@enphoriacoffee.com",
    hours: {
      monday: "11.00 AM - 11.00 PM",
      tuesday: "11.00 AM - 11.00 PM",
      wednesday: "11.00 AM - 11.00 PM",
      thursday: "11.00 AM - 11.00 PM",
      friday: "11.00 AM - 11.00 PM",
      saturday: "11.00 AM - 11.00 PM",
      sunday: "11.00 AM - 11.00 PM"
    }
  },
  socialMedia: {
    instagram: "@enphoriacoffee",
    facebook: "facebook.com/enphoriacoffee",
    twitter: "@enphoriacoffee"
  },
  orderUrl: "https://order.enphoriacoffee.com",
  productImages: [
     "/public/1.jpg",
  "/public/10.jpg",
  "/public/11.jpg",
  "/public/12.jpg",
  "/public/13.jpg",
  "/public/14.jpg",
  "/public/15.jpg",
  "/public/16.jpg",
  "/public/17.jpg",
  "/public/18.jpg",
  "/public/19.jpg",
  "/public/20.jpg",
  "/public/21.jpg",
  "/public/22.jpg",
  "/public/23.jpg",
  "/public/24.jpg",
  "/public/25.jpg",
  "/public/26.jpg",
  "/public/27.jpg",
  "/public/28.jpg",
  "/public/29.jpg",
  "/public/3.jpg",
  "/public/30.jpg",
  "/public/31.jpg",
  "/public/32.jpg",
  "/public/33.jpg",
  "/public/34.jpg",
  "/public/35.jpg",
  "/public/36.jpg",
  "/public/37.jpg",
  "/public/38.jpg",
  "/public/39.jpg",
  "/public/4.jpg",
  "/public/5.jpg",
  "/public/6.jpg",
  "/public/7.jpg",
  "/public/8.jpg",
  "/public/9.jpg",
  ]
};

// Global state
let currentTheme = 'light';
let mobileMenuOpen = false;

// Utility function to safely get elements
function safeGetElement(id) {
  const element = document.getElementById(id);
  if (!element) {
    console.warn(`Element with ID '${id}' not found`);
  }
  return element;
}

function safeQuerySelector(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`Element with selector '${selector}' not found`);
  }
  return element;
}

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function initApp() {
  console.log('Initializing Enphoria Coffee App...');
  
  try {
    // Initialize core functionality
    setupThemeToggle();
    setupNavigation();
    setupMobileMenu();
    
    // Render dynamic content
    renderMenuItems();
    renderHours();
    renderProductGallery();
    
    // Initialize animations and effects
    setupScrollAnimations();
    setupParallaxEffects();
    setupInteractions();
    
    console.log('App initialized successfully!');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

// Theme Toggle Setup
function setupThemeToggle() {
  console.log('Setting up theme toggle...');
  
  const themeToggle = safeGetElement('theme-toggle');
  const themeIcon = safeQuerySelector('.theme-toggle__icon');
  
  if (!themeToggle) {
    console.error('Theme toggle button not found!');
    return;
  }
  
  // Load saved theme
  currentTheme = localStorage.getItem('theme') || 'light';
  applyTheme(currentTheme);
  
  // Add event listener
  themeToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Theme toggle clicked! Current theme:', currentTheme);
    
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    console.log('Switching to theme:', newTheme);
    
    applyTheme(newTheme);
    
    // Visual feedback
    themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => {
      themeToggle.style.transform = 'scale(1)';
    }, 150);
  });
  
  console.log('Theme toggle setup complete');
}

function applyTheme(theme) {
  console.log('Applying theme:', theme);
  
  // Update data attribute
  document.documentElement.setAttribute('data-theme', theme);
  currentTheme = theme;
  
  // Save to localStorage
  localStorage.setItem('theme', theme);
  
  // Update icon
  const themeIcon = safeQuerySelector('.theme-toggle__icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
  }
  
  // Add transition class temporarily
  document.body.classList.add('theme-transitioning');
  setTimeout(() => {
    document.body.classList.remove('theme-transitioning');
  }, 500);
  
  console.log('Theme applied:', theme);
}

// Navigation Setup
function setupNavigation() {
  console.log('Setting up navigation...');
  
  const navLinks = document.querySelectorAll('.nav__link');
  console.log('Found navigation links:', navLinks.length);
  
  navLinks.forEach((link, index) => {
    const href = link.getAttribute('href');
    console.log(`Setting up nav link ${index + 1}: ${href}`);
    
    if (href && href.startsWith('#')) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        console.log('Navigation clicked, target:', targetId);
        
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = 70; // Fixed header height
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          console.log('Scrolling to position:', targetPosition);
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (mobileMenuOpen) {
            closeMobileMenu();
          }
        } else {
          console.error('Target element not found:', targetId);
        }
      });
    }
  });
  
  console.log('Navigation setup complete');
}

// Mobile Menu Setup
function setupMobileMenu() {
  console.log('Setting up mobile menu...');
  
  const navToggle = safeGetElement('nav-toggle');
  const navMenu = safeGetElement('nav-menu');
  
  if (!navToggle || !navMenu) {
    console.error('Mobile menu elements not found');
    return;
  }
  
  navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Mobile menu toggle clicked');
    
    if (mobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
  
  // Close menu on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && mobileMenuOpen) {
      closeMobileMenu();
    }
  });
  
  console.log('Mobile menu setup complete');
}

function openMobileMenu() {
  console.log('Opening mobile menu');
  
  const navMenu = safeGetElement('nav-menu');
  if (!navMenu) return;
  
  mobileMenuOpen = true;
  
  navMenu.style.cssText = `
    display: flex !important;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    background: var(--bg-primary);
    padding: 2rem;
    border-radius: 0 0 0 20px;
    box-shadow: 0 10px 30px var(--card-shadow);
    border: 1px solid var(--border-color);
    z-index: 999;
    min-width: 200px;
    gap: 1rem;
  `;
  
  animateMenuToggle(true);
}

function closeMobileMenu() {
  console.log('Closing mobile menu');
  
  const navMenu = safeGetElement('nav-menu');
  if (!navMenu) return;
  
  mobileMenuOpen = false;
  
  if (window.innerWidth <= 768) {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.cssText = '';
  }
  
  animateMenuToggle(false);
}

function animateMenuToggle(isOpen) {
  const navToggle = safeGetElement('nav-toggle');
  if (!navToggle) return;
  
  const spans = navToggle.querySelectorAll('span');
  
  spans.forEach((span, index) => {
    span.style.transition = 'all 0.3s ease';
  });
  
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
}

// Render Menu Items
function renderMenuItems() {
  console.log('Rendering menu items...');
  
  const menuGrid = safeGetElement('menu-grid');
  if (!menuGrid) {
    console.error('Menu grid not found');
    return;
  }

  const menuHTML = appData.menuItems.map((item, index) => {
    return `
      <div class="menu__item" style="animation-delay: ${index * 0.1}s;">
        <div class="menu__item-category">${item.category}</div>
        <div class="menu__item-image">
          <img src="${item.image}" alt="${item.name}" class="menu-item-img">
        </div>
        <h3 class="menu__item-name">${item.name}</h3>
        <div class="menu__item-price">${item.price}</div>
        <p class="menu__item-description">${item.description}</p>
      </div>
    `;
  }).join('');

  menuGrid.innerHTML = menuHTML;
  console.log('Menu items rendered');
}

// Render Product Gallery
function renderProductGallery() {
  console.log('Rendering product gallery...');
  
  const productGallery = safeGetElement('product-gallery');
  if (!productGallery) {
    console.error('Product gallery not found');
    return;
  }

  const galleryHTML = appData.productImages.map((image, index) => {
    const productName = image.split('.')[0].replace(/-/g, ' ');
    return `
      <div class="gallery__item">
        <div class="gallery__image">
          <img src="${image}" alt="${productName}" class="product-image">
        </div>
      </div>
    `;
  }).join('');

  productGallery.innerHTML = galleryHTML;
  console.log('Product gallery rendered');
}

// Render Hours
function renderHours() {
  console.log('Rendering hours...');
  
  const hoursGrid = safeGetElement('hours-grid');
  if (!hoursGrid) {
    console.error('Hours grid not found');
    return;
  }

  const hoursHTML = Object.entries(appData.cafeInfo.hours).map(([day, hours]) => {
    const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1);
    return `
      <div class="hours-item">
        <span class="hours-day">${capitalizedDay}</span>
        <span class="hours-time">${hours}</span>
      </div>
    `;
  }).join('');

  hoursGrid.innerHTML = hoursHTML;
  console.log('Hours rendered');
}

// Scroll Animations
function setupScrollAnimations() {
  console.log('Setting up scroll animations...');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe elements with animation class
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach(el => observer.observe(el));

  // Menu items stagger animation
  const menuItems = document.querySelectorAll('.menu__item');
  menuItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease-out';
    
    const menuObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
        }
      });
    }, observerOptions);
    
    menuObserver.observe(item);
  });
  
  console.log('Scroll animations setup complete');
}

// Parallax Effects
function setupParallaxEffects() {
  let ticking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const coffeBeans = document.querySelectorAll('.coffee-bean');
    
    coffeBeans.forEach((bean, index) => {
      const speed = 0.5 + (index * 0.1);
      const yPos = -(scrolled * speed);
      bean.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick);
}

// Interactive Effects
function setupInteractions() {
  console.log('Setting up interactions...');
  
  // Button hover effects
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', createRippleEffect);
  });
  
  // Card hover effects
  const cards = document.querySelectorAll('.menu__item, .gallery__item, .menu-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', handleCardHover);
    card.addEventListener('mouseleave', resetCardTransform);
  });
  
  // Header scroll effect
  setupHeaderEffects();
  
  console.log('Interactions setup complete');
}

function createRippleEffect(e) {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  
  const ripple = document.createElement('span');
  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s ease-out;
    pointer-events: none;
    z-index: 0;
  `;
  
  button.style.position = 'relative';
  button.style.overflow = 'hidden';
  button.appendChild(ripple);
  
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }, 600);
}

function handleCardHover(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = (y - centerY) / 10;
  const rotateY = (centerX - x) / 10;
  
  card.style.transform = `
    perspective(1000px) 
    rotateX(${rotateX}deg) 
    rotateY(${rotateY}deg) 
    translateY(-10px)
  `;
}

function resetCardTransform() {
  this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
}

function setupHeaderEffects() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Change header background based on scroll
    if (currentScrollY > 100) {
      header.style.background = currentTheme === 'dark' 
        ? 'rgba(17, 24, 39, 0.98)' 
        : 'rgba(253, 252, 251, 0.98)';
      header.style.backdropFilter = 'blur(20px)';
    } else {
      header.style.background = currentTheme === 'dark'
        ? 'rgba(17, 24, 39, 0.95)'
        : 'rgba(253, 252, 251, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    }
    
    // Hide/show header on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
  });
}

// Add CSS animations
const styles = document.createElement('style');
styles.textContent = `
  @keyframes ripple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  .theme-transitioning * {
    transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), 
                color 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }
  
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease-out;
  }
  
  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .header {
    transition: all 0.3s ease;
  }
  
  .menu-item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
  
  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .product-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: white;
    text-align: center;
    padding: 1rem;
  }
  
  .gallery__image:hover .product-overlay {
    opacity: 1;
  }
`;
document.head.appendChild(styles);

console.log('Enphoria Coffee JavaScript loaded successfully!');