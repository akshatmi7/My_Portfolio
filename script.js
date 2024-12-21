function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function launchRocket() {
    // Trigger the rocket launch animation
    const rocket = document.querySelector('.rocket-icon');
    rocket.classList.add('rocket-launch');
    
    // Fade out the home page
    const homeSection = document.querySelector('body');
    homeSection.classList.add('fade-out');
    
    // Redirect to games page after animation
    setTimeout(function() {
      window.location.href = 'games.html';
    }, 2000); // Wait for the animation to complete before redirecting
  }
  
  