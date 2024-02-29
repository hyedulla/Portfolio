function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    setInterval(alternateRoleTitle, 2000); // Change text every 2 seconds
  });
  
  function alternateRoleTitle() {
    const roleTitle = document.getElementById('role-title');
    if (roleTitle.textContent.trim() === 'Data Analyst') {
      fadeText(roleTitle, 'Business Analyst');
    } else {
      fadeText(roleTitle, 'Data Analyst');
    }
  }
  
  function fadeText(element, newText) {
    element.classList.add('fade-out');
    setTimeout(() => {
      element.textContent = newText;
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
      setTimeout(() => element.classList.remove('fade-in'), 1000); // Remove fade-in class to reset the state for the next change
    }, 1000); // This matches the duration of the fade-out animation
  }
  
  
