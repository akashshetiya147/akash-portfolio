/* =====================================================
   AKASH SHETIYA - PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   CONFIGURATION
===================================================== */

const githubUsername = "akashshetiya147";

const akashNotesURL =
    "https://akash-notes.vercel.app/";



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

                        ISSUED ${escapeHTML(
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
   GITHUB PROJECTS
===================================================== */

async function loadGitHubProjects() {


    const container =
        document.getElementById(
            "githubProjects"
        );


    if (!container) {
        return;
    }


    try {


        /* =========================================
           SHOW LOADING
        ========================================= */

        container.innerHTML = `

            <div class="loading-projects">

                <div class="loader"></div>

                LOADING PROJECTS...

            </div>

        `;



        /* =========================================
           GET GITHUB REPOSITORIES
        ========================================= */

        const response =
            await fetch(

                `https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc&per_page=12`

            );


        if (!response.ok) {

            throw new Error(
                "GitHub API request failed"
            );

        }


        const repos =
            await response.json();



        /* =========================================
           AKASH NOTES PROJECT
        ========================================= */

        const akashNotes = {

            name:
                "AKASH NOTES",

            description:
                "A personal academic notes platform created to organize and access study materials easily.",

            language:
                "WEB",

            html_url:
                akashNotesURL,

            stargazers_count:
                0,

            forks_count:
                0,

            featured:
                true

        };



        /* =========================================
           PUT AKASH NOTES FIRST
        ========================================= */

        const projects = [

            akashNotes,

            ...repos

        ];



        /* =========================================
           CLEAR LOADING
        ========================================= */

        container.innerHTML = "";



        /* =========================================
           CREATE PROJECT CARDS
        ========================================= */

        projects.forEach(
            function(repo, index) {


                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "project-card";



                /* ---------------------------------
                   PROJECT LANGUAGE
                --------------------------------- */

                const language =
                    repo.language ||
                    "CODE";



                /* ---------------------------------
                   PROJECT DESCRIPTION
                --------------------------------- */

                const description =
                    repo.description ||
                    "A project developed by Akash Shetiya.";



                /* ---------------------------------
                   PROJECT TYPE
                --------------------------------- */

                const projectType =
                    repo.featured
                    ? "FEATURED"
                    : "PROJECT";



                /* ---------------------------------
                   PROJECT ICON
                --------------------------------- */

                const projectIcon =
                    repo.featured
                    ? "AN"
                    : "&lt;/&gt;";



                /* ---------------------------------
                   PROJECT BUTTON
                --------------------------------- */

                const buttonText =
                    repo.featured
                    ? "OPEN WEBSITE →"
                    : "VIEW PROJECT →";



                /* ---------------------------------
                   STATS
                --------------------------------- */

                const stats =
                    repo.featured

                    ? `
                        <div class="github-stats">
                            LIVE
                        </div>
                      `

                    : `
                        <div class="github-stats">

                            ★
                            ${repo.stargazers_count || 0}

                            &nbsp;&nbsp;

                            ⑂
                            ${repo.forks_count || 0}

                        </div>
                      `;



                /* ---------------------------------
                   CARD HTML
                --------------------------------- */

                card.innerHTML = `

                    <div class="project-top">

                        <span>

                            ${projectType}

                        </span>


                        <span>

                            ${escapeHTML(
                                language.toUpperCase()
                            )}

                        </span>

                    </div>



                    <div class="project-symbol">

                        ${projectIcon}

                    </div>



                    <h3>

                        ${escapeHTML(
                            repo.name
                        )}

                    </h3>



                    <p>

                        ${escapeHTML(
                            description
                        )}

                    </p>



                    ${stats}



                    <a
                        href="${repo.html_url}"
                        target="_blank"
                        rel="noopener noreferrer">

                        ${buttonText}

                    </a>

                `;



                container.appendChild(
                    card
                );

            }
        );


    }

    catch (error) {


        console.error(
            "GitHub Error:",
            error
        );


        /* =========================================
           FALLBACK
        ========================================= */

        container.innerHTML = `

            <article class="project-card">


                <div class="project-top">

                    <span>
                        FEATURED
                    </span>


                    <span>
                        WEB
                    </span>

                </div>



                <div class="project-symbol">

                    AN

                </div>



                <h3>

                    AKASH NOTES

                </h3>



                <p>

                    A personal academic notes platform
                    created to organize and access study
                    materials easily.

                </p>



                <div class="github-stats">

                    LIVE

                </div>



                <a
                    href="${akashNotesURL}"
                    target="_blank"
                    rel="noopener noreferrer">

                    OPEN WEBSITE →

                </a>


            </article>

        `;


    }

}


loadGitHubProjects();



/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value) {


    if (value === null ||
        value === undefined) {

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
   SHOW SELECTED SECTION ONLY
===================================================== */

function showSection(
    sectionId,
    updateURL = true
) {


    /* -----------------------------------------
       HIDE EVERY SECTION
    ----------------------------------------- */

    pageSections.forEach(
        function(section) {

            section.classList.remove(
                "active-section"
            );

        }
    );



    /* -----------------------------------------
       FIND SELECTED SECTION
    ----------------------------------------- */

    const selectedSection =
        document.getElementById(
            sectionId
        );


    if (!selectedSection) {

        showSection(
            "home",
            false
        );

        return;

    }



    /* -----------------------------------------
       SHOW SELECTED SECTION
    ----------------------------------------- */

    selectedSection.classList.add(
        "active-section"
    );



    /* -----------------------------------------
       UPDATE ACTIVE NAVIGATION
    ----------------------------------------- */

    navigationLinks.forEach(
        function(link) {


            link.classList.remove(
                "active-nav"
            );


            const linkTarget =
                link.getAttribute(
                    "href"
                );


            if (
                linkTarget ===
                "#" + sectionId
            ) {

                link.classList.add(
                    "active-nav"
                );

            }

        }
    );



    /* -----------------------------------------
       CLOSE MOBILE MENU
    ----------------------------------------- */

    closeMobileMenu();



    /* -----------------------------------------
       UPDATE URL
    ----------------------------------------- */

    if (updateURL) {


        history.pushState(
            null,
            "",
            "#" + sectionId
        );

    }



    /* -----------------------------------------
       SCROLL TO TOP
    ----------------------------------------- */

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



/* =====================================================
   NAVIGATION CLICK EVENTS
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

if (menuBtn && nav) {


    menuBtn.addEventListener(
        "click",
        function() {


            const menuIsOpen =
                nav.classList.contains(
                    "mobile-open"
                );


            if (menuIsOpen) {

                closeMobileMenu();

            }

            else {

                openMobileMenu();

            }

        }
    );

}



/* =====================================================
   CLOSE MENU WITH ESCAPE KEY
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
   CLOSE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    function(event) {


        if (!nav || !menuBtn) {
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
            !nav.contains(event.target) &&
            !menuBtn.contains(event.target)
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
   LOAD INITIAL SECTION
===================================================== */

function loadInitialSection() {


    const hash =
        window.location.hash;


    /* -----------------------------------------
       OPEN HASH SECTION
    ----------------------------------------- */

    if (
        hash &&
        hash.length > 1
    ) {


        const sectionId =
            hash.substring(1);


        const section =
            document.getElementById(
                sectionId
            );


        if (section) {


            showSection(
                sectionId,
                false
            );


            return;

        }

    }



    /* -----------------------------------------
       DEFAULT HOME
    ----------------------------------------- */

    showSection(
        "home",
        false
    );

}


loadInitialSection();



/* =====================================================
   BROWSER BACK / FORWARD
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


            const sectionId =
                hash.substring(1);


            showSection(
                sectionId,
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
   HERO INTERNAL BUTTONS
===================================================== */

const heroInternalLinks =
    document.querySelectorAll(
        '.hero a[href^="#"]'
    );


heroInternalLinks.forEach(
    function(link) {


        link.addEventListener(
            "click",
            function(event) {


                event.preventDefault();


                const href =
                    link.getAttribute(
                        "href"
                    );


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
   CONTACT INTERNAL LINKS
===================================================== */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(
    function(link) {


        if (
            link.closest(
                ".navbar"
            )
        ) {

            return;

        }


        link.addEventListener(
            "click",
            function(event) {


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !href ||
                    href === "#"
                ) {

                    return;

                }


                const sectionId =
                    href.substring(1);


                if (
                    document.getElementById(
                        sectionId
                    )
                ) {


                    event.preventDefault();


                    showSection(
                        sectionId
                    );

                }

            }
        );

    }
);



/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "Portfolio loaded successfully."
);

console.log(
    "GitHub:",
    githubUsername
);

console.log(
    "Akash Notes:",
    akashNotesURL
);
