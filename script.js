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


            container.appendChild(card);

        }
    );

}


loadCertificates();


/* =====================================================
   NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        ".page-section"
    );


const navLinks =
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
   MOBILE MENU
===================================================== */

function openMenu() {

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

    }

}


function closeMenu() {

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

    }

}


/* =====================================================
   SHOW ONE SECTION
===================================================== */

function showSection(
    id,
    updateURL = true
) {


    sections.forEach(
        function(section) {

            section.classList.remove(
                "active-section"
            );

        }
    );


    let selected =
        document.getElementById(id);


    if (!selected) {

        id =
            "home";

        selected =
            document.getElementById(
                "home"
            );

    }


    if (!selected) {

        return;

    }


    selected.classList.add(
        "active-section"
    );


    navLinks.forEach(
        function(link) {

            link.classList.remove(
                "active-nav"
            );


            if (
                link.getAttribute(
                    "href"
                ) ===
                "#" + id
            ) {

                link.classList.add(
                    "active-nav"
                );

            }

        }
    );


    closeMenu();


    if (updateURL) {

        history.pushState(
            null,
            "",
            "#" + id
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

navLinks.forEach(
    function(link) {


        link.addEventListener(
            "click",
            function(event) {


                event.preventDefault();


                const target =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !target ||
                    !target.startsWith("#")
                ) {

                    return;

                }


                showSection(
                    target.substring(1)
                );

            }
        );

    }
);


/* =====================================================
   MENU BUTTON
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

                closeMenu();

            } else {

                openMenu();

            }

        }
    );

}


/* =====================================================
   ESC
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeMenu();

        }

    }
);


/* =====================================================
   CLICK OUTSIDE
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

            closeMenu();

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

            closeMenu();

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

        const id =
            hash.substring(1);


        if (
            document.getElementById(
                id
            )
        ) {

            showSection(
                id,
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

        } else {

            showSection(
                "home",
                false
            );

        }

    }
);


/* =====================================================
   HERO INTERNAL BUTTONS
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


                    showSection(
                        link
                        .getAttribute(
                            "href"
                        )
                        .substring(1)
                    );

                }
            );

        }
    );


console.log(
    "Akash Shetiya Portfolio loaded."
);
