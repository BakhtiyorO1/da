    const navLinks = document.querySelectorAll(".nav-link");
    const allPopups = document.querySelectorAll(".popup-below-nav");

    navLinks.forEach(link => {
      const popupId = link.getAttribute("data-popup-id");
      const popup = document.getElementById(popupId);

      link.addEventListener("mouseenter", () => {
        allPopups.forEach(p => (p.style.display = "none"));
        if (popup) popup.style.display = "block";
      });

      link.addEventListener("mouseleave", () => {
        if (popup) {
          popup.addEventListener("mouseenter", () => (popup.style.display = "block"));
          popup.addEventListener("mouseleave", () => (popup.style.display = "none"));
          setTimeout(() => {
            if (!popup.matches(":hover") && !link.matches(":hover")) {
              popup.style.display = "none";
            }
          }, 200);
        }
      });
    });