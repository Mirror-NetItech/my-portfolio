document.getElementById('menuIcon').addEventListener('click', function() {
          const navItems = document.getElementById('navItems');
          const isVisible = navItems.style.maxHeight && navItems.style.maxHeight !== '0px';

          if (isVisible) {
              navItems.style.maxHeight = '0'; // Collapse
          } else {
              navItems.style.maxHeight = navItems.scrollHeight + 'px'; // Expand to full height
          }
      });
    function toggleDropdown() {
        const dropdown = document.getElementById('dropdown');
        dropdown.classList.toggle('show');
    }