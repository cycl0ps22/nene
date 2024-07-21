document.addEventListener('DOMContentLoaded', function() {
  // Get references to the nav links and sections
  const homeNavLink = document.getElementById('home-nav');
  const experienceNavLink = document.getElementById('experience-nav');
  const skillsNavLink = document.getElementById('skills-nav');
  const contactNavLink = document.getElementById('contact-nav');

  const experienceSection = document.getElementById('experience');
  const skillsSection = document.getElementById('skills');
  const contactSection = document.getElementById('contact');
  
  const logoLink = document.querySelector('.logo a');
  const menuCheckbox = document.getElementById('check');
  const resumeButton = document.getElementById('resumeButton');
  const darkModeBtn = document.getElementById('dark-mode-btn');
  const moonIcon = document.getElementById('moon-icon');
  const sunIcon = document.getElementById('sun-icon');

  // Function to add active class to a nav link
  function setActiveNavLink(link) {
    homeNavLink.classList.remove('active-nav');
    experienceNavLink.classList.remove('active-nav');
    skillsNavLink.classList.remove('active-nav');
    contactNavLink.classList.remove('active-nav');
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

  // Click event listener for Experience nav link
  experienceNavLink.addEventListener('click', function(event) {
    event.preventDefault();
    setActiveNavLink(experienceNavLink);
    scrollToElement(experienceSection);
    closeMobileMenu();
  });

  // Click event listener for Skills nav link
  skillsNavLink.addEventListener('click', function(event) {
    event.preventDefault();
    setActiveNavLink(skillsNavLink);
    scrollToElement(skillsSection);
    closeMobileMenu();
  });

  // Click event listener for Contact nav link
  contactNavLink.addEventListener('click', function(event) {
    event.preventDefault();
    setActiveNavLink(contactNavLink);
    scrollToElement(contactSection);
    closeMobileMenu();
  });

  // Click event listener for Home nav link
  homeNavLink.addEventListener('click', function(event) {
    event.preventDefault();
    setActiveNavLink(homeNavLink);
    scrollToElement(document.body);
    closeMobileMenu();
  });

  // Click event listener for logo link
  logoLink.addEventListener('click', function(event) {
    event.preventDefault();
    scrollToElement(document.body);
    setActiveNavLink(homeNavLink);
    closeMobileMenu();
  });

  // Click event listener for Resume button
  if (resumeButton) {
    resumeButton.addEventListener('click', function(event) {
      event.preventDefault();
      window.open('https://drive.google.com/file/d/1jHGk2sdlQcAyn5iBSmTybw3hfNo1yAT3/view?usp=sharing', '_blank');
    });
  }

  // Click event listener for dark mode button
  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
    } else {
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
    }
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

  // Function to handle modal closing and form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
    setTimeout(function() {
      closeModal();
    }, 2000);
  });

  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
    document.getElementById('contact-form').reset();
  }

  // Function to add 'animate' class to sections when they come into view
  function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }

  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver(animateOnScroll);

  // Select sections to observe
  const sectionsToAnimate = document.querySelectorAll('.main_container, .work, .skills-grid, .contact-content');

  // Observe each section
  sectionsToAnimate.forEach(section => {
    observer.observe(section);
  });

  // Function to manage navigation bar visibility based on scroll position
  const nav = document.querySelector('nav');
  let lastScrollPosition = 0;

  window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition < lastScrollPosition) {
      nav.classList.remove('scrolled');
    } else {
      if (currentScrollPosition > 200) {
        nav.classList.add('scrolled');
      }
    }

    lastScrollPosition = currentScrollPosition;
  });

});
