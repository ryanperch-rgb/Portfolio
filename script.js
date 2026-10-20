
document.addEventListener("DOMContentLoaded", function () {

    // 1. Mobile navigation
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("open");
        });

        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("open");
            });
        });
    }

    // 2. Dark and light mode
    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");

            const isLight = document.body.classList.contains("light-mode");

            themeToggle.textContent = isLight
                ? "☾ Dark Mode"
                : "☀ Light Mode";
        });
    }

    // 3. Welcome message
    const welcomeBtn = document.getElementById("welcomeBtn");

    if (welcomeBtn) {
        welcomeBtn.addEventListener("click", function () {
            alert("Welcome to my portfolio! Thank you for visiting.");
        });
    }

    // 4. Show and hide information
    const readMoreBtn = document.getElementById("readMoreBtn");
    const moreInfo = document.getElementById("moreInfo");

    if (readMoreBtn && moreInfo) {
        readMoreBtn.addEventListener("click", function () {
            moreInfo.classList.toggle("hidden");

            const isHidden = moreInfo.classList.contains("hidden");

            readMoreBtn.textContent = isHidden
                ? "Read More +"
                : "Show Less −";

            readMoreBtn.setAttribute("aria-expanded", String(!isHidden));
        });
    }

    // 5. Project category filters
    const filters = document.querySelectorAll(".filter");
    const projectCards = document.querySelectorAll(".project-card");

    filters.forEach(function (button) {
        button.addEventListener("click", function () {
            filters.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            const category = button.dataset.filter;

            projectCards.forEach(function (card) {
                const matches =
                    category === "all" ||
                    card.dataset.category === category;

                card.classList.toggle("hidden", !matches);
            });
        });
    });

    // 6. Contact button alert
    const contactAlert = document.getElementById("contactAlert");

    if (contactAlert) {
        contactAlert.addEventListener("click", function () {
            alert("Please contact me using the email address listed on this page.");
        });
    }

    // 7. Current date and time
    function updateDateTime() {
        const dateTime = document.getElementById("dateTime");

        if (dateTime) {
            dateTime.textContent = new Date().toLocaleString();
        }
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    // 8. Image slideshow
    const slideshow = document.getElementById("slideshowImage");

    if (slideshow) {
        const images = [
            "images/personal-webpage.jpg",
            "images/my-dishes.jpg",
            "images/card-student.jpg",
            "images/multimedia.jpg",
            "images/storybooks.jpg",
            "images/teachers-month.jpg"
        ];

        let currentImage = 0;

        function showImage(index) {
            currentImage = (index + images.length) % images.length;
            slideshow.src = images[currentImage];
        }

        const previousBtn = document.getElementById("previousImage");
        const nextBtn = document.getElementById("nextImage");

        if (previousBtn) {
            previousBtn.addEventListener("click", function () {
                showImage(currentImage - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", function () {
                showImage(currentImage + 1);
            });
        }

        slideshow.addEventListener("error", function () {
            slideshow.alt = "Please check the image filename in your images folder.";
        });
    }

    // 9. Current copyright year
    document.querySelectorAll(".year").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // 10. Back-to-top links
    document.querySelectorAll(".back-top").forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });

});
