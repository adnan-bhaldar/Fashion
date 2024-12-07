<script>
         
document.addEventListener('DOMContentLoaded', function () {

    //==for search=====================================//
    document.addEventListener('click', function (event) {
        if (event.target.closest('.nav-search')) {
            document.querySelector('.search-bar').classList.add('search-bar-active');
        } else if (event.target.closest('.search-cancel')) {
            document.querySelector('.search-bar').classList.remove('search-bar-active');
        }
    });

    // ==For Login and Sign-up========================//
    document.addEventListener('click', function (event) {
        // Check if the clicked element has the class 'user' or 'already-account'
        if (event.target.closest('.nav-user, .already-account')) {
            const formElement = document.querySelector('.form');
            formElement.classList.add('login-active');
            formElement.classList.remove('sign-up-active');
        }

        // Check if the clicked element has the class 'sign-up-btn'
        else if (event.target.closest('.sign-up-btn')) {
            const formElement = document.querySelector('.form');
            formElement.classList.add('sign-up-active');
            formElement.classList.remove('login-active');
        }

        // Check if the clicked element has the class 'form-cancel'
        else if (event.target.closest('.form-cancel')) {
            const formElement = document.querySelector('.form');
            formElement.classList.remove('login-active');
            formElement.classList.remove('sign-up-active');
        }
    });

    //==for fix header===========================//
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY; // Store the last scroll position

    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;

        // Check if at the top
        if (currentScrollY === 0) {
            header.classList.remove('header-fix');
        } else if (currentScrollY < lastScrollY) {
            // Scrolling up
            header.classList.add('header-fix');
        } else {
            header.classList.remove('header-fix');
        }

        // Update the last scroll position
        lastScrollY = currentScrollY;
    });
});

</script>
