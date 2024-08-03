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

  // Function to add active class to a nav link and scroll to section
  function handleNavLinkClick(link, section) {
    setActiveNavLink(link);
    scrollToElement(section);
    closeMobileMenu();
  }

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

  // Click event listeners for nav links
  experienceNavLink.addEventListener('click', event => {
    event.preventDefault();
    handleNavLinkClick(experienceNavLink, experienceSection);
  });

  skillsNavLink.addEventListener('click', event => {
    event.preventDefault();
    handleNavLinkClick(skillsNavLink, skillsSection);
  });

  contactNavLink.addEventListener('click', event => {
    event.preventDefault();
    handleNavLinkClick(contactNavLink, contactSection);
  });

  homeNavLink.addEventListener('click', event => {
    event.preventDefault();
    handleNavLinkClick(homeNavLink, document.body);
  });

  logoLink.addEventListener('click', event => {
    event.preventDefault();
    handleNavLinkClick(homeNavLink, document.body);
  });

  // Click event listener for Resume button
  if (resumeButton) {
    resumeButton.addEventListener('click', event => {
      event.preventDefault();
      window.open('https://drive.google.com/file/d/1jHGk2sdlQcAyn5iBSmTybw3hfNo1yAT3/view?usp=sharing', '_blank');
    });
  }

  // Click event listener for dark mode button
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      moonIcon.style.display = document.body.classList.contains('dark-mode') ? 'none' : 'block';
      sunIcon.style.display = document.body.classList.contains('dark-mode') ? 'block' : 'none';
    });
  }

  // Modal handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'block';
        setTimeout(() => closeModal(), 2000);
      }
    });
  }

  function closeModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none';
      if (contactForm) {
        contactForm.reset();
      }
    }
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
  sectionsToAnimate.forEach(section => observer.observe(section));

  // Function to manage navigation bar visibility based on scroll position
  const nav = document.querySelector('nav');
  let lastScrollPosition = 0;

  window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;
    if (nav) {
      if (currentScrollPosition < lastScrollPosition) {
        nav.classList.remove('scrolled');
      } else {
        if (currentScrollPosition > 200) {
          nav.classList.add('scrolled');
        }
      }
    }
    lastScrollPosition = currentScrollPosition;

    // Update active nav link based on section visibility
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
});
