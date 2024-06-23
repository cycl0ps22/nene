document.addEventListener('DOMContentLoaded', function() {
  // Get references to the nav links and sections
  const homeNavLink = document.getElementById('home-nav');
  const experienceNavLink = document.getElementById('experience-nav');
  const experienceSection = document.getElementById('experience');
  const logoLink = document.querySelector('.logo a'); // Assuming .logo is the class of your logo container
  const menuCheckbox = document.getElementById('check'); // Assuming this is your checkbox for mobile menu
  
  // Function to add active class to a nav link
  function setActiveNavLink(link) {
    // Remove active class from all nav links
    homeNavLink.classList.remove('active-nav');
    experienceNavLink.classList.remove('active-nav');
    // Add active class to the specified link
    link.classList.add('active-nav');
  }
  
  // Function to scroll to a specific element smoothly
  function scrollToElement(element) {
    const elementTop = element.offsetTop;
    window.scrollTo({
      top: elementTop,
      behavior: 'smooth'
    });
  }
  
  // Function to close mobile menu when a nav link is clicked
  function closeMobileMenu() {
    if (menuCheckbox.checked) {
      menuCheckbox.checked = false;
    }
  }
  
  // Initially set Home nav link as active
  setActiveNavLink(homeNavLink);
  
  // Click event listener for Experience nav link
  experienceNavLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    // Set Experience nav link as active
    setActiveNavLink(experienceNavLink);
    // Scroll to the top of the experience section
    scrollToElement(experienceSection);
    // Close mobile menu
    closeMobileMenu();
  });
  
  // Click event listener for Home nav link
  homeNavLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    // Set Home nav link as active
    setActiveNavLink(homeNavLink);
    // Scroll to the top of the page
    scrollToElement(document.body);
    // Close mobile menu
    closeMobileMenu();
  });
  
  // Click event listener for logo link
  logoLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    // Scroll to the top of the page
    scrollToElement(document.body);
    // Set Home nav link as active
    setActiveNavLink(homeNavLink);
    // Close mobile menu
    closeMobileMenu();
  });
  
  // Scroll event listener to change active nav link based on section visibility
  window.addEventListener('scroll', function() {
    const experienceSectionRect = experienceSection.getBoundingClientRect();
    
    // Check if top of experience section is in viewport
    if (experienceSectionRect.top <= 100) {
      // Set Experience nav link as active
      setActiveNavLink(experienceNavLink);
    } else {
      // Set Home nav link as active if not in experience section
      setActiveNavLink(homeNavLink);
    }
  });
});
