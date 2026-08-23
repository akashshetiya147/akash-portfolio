/* =====================================================
   CERTIFICATES
===================================================== */

const certificates = [

    {
        title: "Python (Basic)",

        issuer: "HACKERRANK",

        description:
            "Python programming certification covering fundamentals, programming concepts and problem solving.",

        date: "2026",

        url:
            "https://www.linkedin.com/feed/update/urn:li:activity:7469989380703604736/"
    },


    {
        title: "Introduction to Generative AI",

        issuer: "GOOGLE",

        description:
            "Introduction to Generative AI and its fundamentals, concepts and applications.",

        date: "2026",

        url:
            "https://www.linkedin.com/feed/update/urn:li:activity:7494730038274162688/"
    }

];



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
        document.createElement("div");


    div.textContent =
        value;


    return div.innerHTML;

}



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
                    class="certificate-link"
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
   NAVIGATION
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
            "Close menu"
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
            "Open menu"
        );

    }

}



/* =====================================================
   SHOW SECTION
===================================================== */

function showSection(
    sectionId,
    updateURL = true
) {


    pageSections.forEach(
        function(section) {

            section.classList.remove(
                "active-section"
            );

        }
    );


    let selectedSection =
        document.getElementById(
            sectionId
        );


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


    selectedSection.classList.add(
        "active-section"
    );


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


    closeMobileMenu();


    if (updateURL) {

        history.pushState(
            null,
            "",
            "#" + sectionId
        );

    }


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
        function(event) {


            event.stopPropagation();


            if (
                nav.classList.contains(
                    "mobile-open"
                )
            ) {

                closeMobileMenu();

            }

            else {

                openMobileMenu();

            }

        }
    );

}



/* =====================================================
   ESC KEY
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
   CLICK OUTSIDE MENU
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
   RESIZE
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
   INITIAL SECTION
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
   BACK / FORWARD
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
    "Akash Shetiya Portfolio loaded successfully."
);

console.log(
    "Projects: AKASH NOTES only."
);
