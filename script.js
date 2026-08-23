/* =====================================================
   CERTIFICATES
===================================================== */

const certificates = [

    {
        title:
            "Python (Basic)",

        issuer:
            "HACKERRANK",

        description:
            "Python programming certification covering fundamentals, programming concepts and problem solving.",

        date:
            "2026",

        url:
            "https://www.linkedin.com/feed/update/urn:li:activity:7469989380703604736/"
    },


    {
        title:
            "Introduction to Generative AI",

        issuer:
            "GOOGLE",

        description:
            "Introduction to Generative AI and its fundamentals, concepts and applications.",

        date:
            "2026",

        url:
            "https://www.linkedin.com/feed/update/urn:li:activity:7494730038274162688/"
    }

];


/* =====================================================
   LOAD CERTIFICATES
===================================================== */

function loadCertificates() {

    const container =
        document.getElementById(
            "certificateContainer"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    certificates.forEach(
        function(certificate) {


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "certificate";


            card.innerHTML = `

                <div class="certificate-icon">

                    CERT

                </div>


                <div class="certificate-content">

                    <span>

                        ${escapeHTML(
                            certificate.issuer
                        )}

                    </span>


                    <h3>

                        ${escapeHTML(
                            certificate.title
                        )}

                    </h3>


                    <p>

                        ${escapeHTML(
                            certificate.description
                        )}

                    </p>


                    <small>

                        ISSUED
                        ${escapeHTML(
                            certificate.date
                        )}

                    </small>

                </div>


                <a
                    href="${certificate.url}"
                    target="_blank"
                    rel="noopener noreferrer">

                    OPEN CERTIFICATE ↗

                </a>

            `;


            container.appendChild(
                card
            );

        }
    );

}


loadCertificates();


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        value;


    return div.innerHTML;

}


/* =====================================================
   NAVIGATION ELEMENTS
===================================================== */

const pageSections =
    document.querySelectorAll(
        ".page-section"
    );


const navigationLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


const menuBtn =
    document.getElementById(
        "menuBtn"
    );


const nav =
    document.getElementById(
        "nav"
    );


/* =====================================================
   OPEN MOBILE MENU
===================================================== */

function openMobileMenu() {

    if (!nav) {
        return;
    }


    nav.classList.add(
        "mobile-open"
    );


    if (menuBtn) {

        menuBtn.innerHTML =
            "✕";

        menuBtn.setAttribute(
            "aria-expanded",
            "true"
        );

        menuBtn.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

    }

}


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

function closeMobileMenu() {

    if (!nav) {
        return;
    }


    nav.classList.remove(
        "mobile-open"
    );


    if (menuBtn) {

        menuBtn.innerHTML =
            "☰";

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

        menuBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

}


/* =====================================================
   SHOW ONLY SELECTED SECTION
===================================================== */

function showSection(
    sectionId,
    updateURL = true
) {


    /* HIDE ALL SECTIONS */

    pageSections.forEach(
        function(section) {

            section.classList.remove(
                "active-section"
            );

        }
    );


    /* FIND SECTION */

    let selectedSection =
        document.getElementById(
            sectionId
        );


    /* DEFAULT TO HOME */

    if (!selectedSection) {

        sectionId =
            "home";

        selectedSection =
            document.getElementById(
                "home"
            );

    }


    if (!selectedSection) {
        return;
    }


    /* SHOW SECTION */

    selectedSection.classList.add(
        "active-section"
    );


    /* ACTIVE NAVIGATION */

    navigationLinks.forEach(
        function(link) {


            link.classList.remove(
                "active-nav"
            );


            if (
                link.getAttribute(
                    "href"
                ) ===
                "#" + sectionId
            ) {

                link.classList.add(
                    "active-nav"
                );

            }

        }
    );


    /* CLOSE MOBILE MENU */

    closeMobileMenu();


    /* UPDATE URL */

    if (updateURL) {

        history.pushState(
            null,
            "",
            "#" + sectionId
        );

    }


    /* SCROLL TO TOP */

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =====================================================
   NAVIGATION CLICKS
===================================================== */

navigationLinks.forEach(
    function(link) {


        link.addEventListener(
            "click",
            function(event) {


                event.preventDefault();


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !href ||
                    !href.startsWith("#")
                ) {

                    return;

                }


                const sectionId =
                    href.substring(1);


                showSection(
                    sectionId
                );

            }
        );

    }
);


/* =====================================================
   MOBILE MENU BUTTON
===================================================== */

if (
    menuBtn &&
    nav
) {


    menuBtn.addEventListener(
        "click",
        function() {


            const isOpen =
                nav.classList.contains(
                    "mobile-open"
                );


            if (isOpen) {

                closeMobileMenu();

            }

            else {

                openMobileMenu();

            }

        }
    );

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {


        if (
            event.key ===
            "Escape"
        ) {

            closeMobileMenu();

        }

    }
);


/* =====================================================
   CLOSE MENU OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    function(event) {


        if (
            !nav ||
            !menuBtn
        ) {

            return;

        }


        if (
            !nav.classList.contains(
                "mobile-open"
            )
        ) {

            return;

        }


        if (
            !nav.contains(
                event.target
            ) &&
            !menuBtn.contains(
                event.target
            )
        ) {

            closeMobileMenu();

        }

    }
);


/* =====================================================
   WINDOW RESIZE
===================================================== */

window.addEventListener(
    "resize",
    function() {


        if (
            window.innerWidth > 700
        ) {

            closeMobileMenu();

        }

    }
);


/* =====================================================
   INITIAL PAGE
===================================================== */

function loadInitialSection() {


    const hash =
        window.location.hash;


    if (
        hash &&
        hash.length > 1
    ) {


        const sectionId =
            hash.substring(1);


        if (
            document.getElementById(
                sectionId
            )
        ) {


            showSection(
                sectionId,
                false
            );


            return;

        }

    }


    showSection(
        "home",
        false
    );

}


loadInitialSection();


/* =====================================================
   BACK / FORWARD BUTTON
===================================================== */

window.addEventListener(
    "popstate",
    function() {


        const hash =
            window.location.hash;


        if (
            hash &&
            hash.length > 1
        ) {


            showSection(
                hash.substring(1),
                false
            );

        }

        else {


            showSection(
                "home",
                false
            );

        }

    }
);


/* =====================================================
   HERO INTERNAL LINKS
===================================================== */

document
    .querySelectorAll(
        '.hero a[href^="#"]'
    )
    .forEach(
        function(link) {


            link.addEventListener(
                "click",
                function(event) {


                    event.preventDefault();


                    const sectionId =
                        link
                        .getAttribute(
                            "href"
                        )
                        .substring(1);


                    showSection(
                        sectionId
                    );

                }
            );

        }
    );


/* =====================================================
   CONSOLE
===================================================== */

console.log(
    "Akash Shetiya Portfolio loaded."
);

console.log(
    "Project: Akash Notes"
);
