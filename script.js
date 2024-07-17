document.addEventListener('DOMContentLoaded', function() {
  // Get references to the nav links and sections
  const homeNavLink = document.getElementById('home-nav');
  const experienceNavLink = document.getElementById('experience-nav');
  const skillsNavLink = document.getElementById('skills-nav');
  const contactNavLink = document.getElementById('contact-nav');

  const experienceSection = document.getElementById('experience');
  const skillsSection = document.getElementById('skills');
  const contactSection = document.getElementById('contact');
  
  const logoLink = document.querySelector('.logo a'); // Assuming .logo is the class of your logo container
  const menuCheckbox = document.getElementById('check'); // Assuming this is your checkbox for mobile menu
  
  // Function to add active class to a nav link
  function setActiveNavLink(link) {
    // Remove active class from all nav links
    homeNavLink.classList.remove('active-nav');
    experienceNavLink.classList.remove('active-nav');
    skillsNavLink.classList.remove('active-nav');
    contactNavLink.classList.remove('active-nav');
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
  
  // Click event listener for Skills nav link
  skillsNavLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    // Set Skills nav link as active
    setActiveNavLink(skillsNavLink);
    // Scroll to the top of the skills section
    scrollToElement(skillsSection);
    // Close mobile menu
    closeMobileMenu();
  });
  
  // Click event listener for Contact nav link
  contactNavLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    // Set Contact nav link as active
    setActiveNavLink(contactNavLink);
    // Scroll to the top of the contact section
    scrollToElement(contactSection);
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
  const skillsSectionRect = skillsSection.getBoundingClientRect();
  const contactSectionRect = contactSection.getBoundingClientRect();

  if (contactSectionRect.top <= 100 && contactSectionRect.bottom >= 0) {
    setActiveNavLink(contactNavLink);
  } else if (skillsSectionRect.top <= 100 && skillsSectionRect.bottom >= 0) {
    setActiveNavLink(skillsNavLink);
  } else if (experienceSectionRect.top <= 100 && experienceSectionRect.bottom >= 0) {
    setActiveNavLink(experienceNavLink);
  } else {
    setActiveNavLink(homeNavLink);
  }
});


  // Click event listener for Resume button (assuming it exists in your HTML)
  const resumeButton = document.getElementById('resumeButton');
  if (resumeButton) {
    resumeButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default button behavior
      // Replace 'your-resume-link-url' with the actual URL of your resume
      window.open('https://drive.google.com/file/d/1jHGk2sdlQcAyn5iBSmTybw3hfNo1yAT3/view?usp=sharing', '_blank');
    });


  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
    document.getElementById('contact-form').reset();
  }

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
    setTimeout(function() {
      closeModal();
    }, 2000);
  });
 }
});
