/* =====================================================
   PORTFOLIO CONFIGURATION
===================================================== */

const githubUsername = "akashshetiya147";

const akashNotesURL =
    "https://akash-notes.vercel.app/";


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
   GITHUB + AKASH NOTES PROJECTS
===================================================== */

async function loadGitHubProjects() {

    const container =
        document.getElementById(
            "githubProjects"
        );


    if (!container) {
        return;
    }


    /* =================================================
       AKASH NOTES
    ================================================= */

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


    try {


        container.innerHTML = `

            <div class="loading-projects">

                <div class="loader"></div>

                LOADING PROJECTS...

            </div>

        `;


        /* =============================================
           FETCH GITHUB
        ============================================= */

        const response =
            await fetch(

                `https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc&per_page=12`

            );


        let repos = [];


        if (response.ok) {

            repos =
                await response.json();

        }


        /* =============================================
           AKASH NOTES ALWAYS FIRST
        ============================================= */

        const projects = [

            akashNotes,

            ...repos

        ];


        container.innerHTML = "";


        /* =============================================
           CREATE PROJECT CARDS
        ============================================= */

        projects.forEach(
            function(repo) {


                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "project-card";


                const language =
                    repo.language ||
                    "CODE";


                const description =
                    repo.description ||
                    "A project developed by Akash Shetiya.";


                const isFeatured =
                    repo.featured === true;


                const projectType =
                    isFeatured
                    ? "FEATURED"
                    : "PROJECT";


                const icon =
                    isFeatured
                    ? "AN"
                    : "&lt;/&gt;";


                const button =
                    isFeatured
                    ? "OPEN WEBSITE →"
                    : "VIEW PROJECT →";


                const stats =
                    isFeatured

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

                        ${icon}

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

                        ${button}

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
            "GitHub loading error:",
            error
        );


        /* =============================================
           AKASH NOTES FALLBACK
        ============================================= */

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
   SHOW ONE SECTION ONLY
===================================================== */

function showSection(
    sectionId,
    updateURL = true
) {


    /* HIDE ALL */

    pageSections.forEach(
        function(section) {

            section.classList.remove(
                "active-section"
            );

        }
    );


    /* FIND SECTION */

    const selectedSection =
        document.getElementById(
            sectionId
        );


    if (!selectedSection) {

        sectionId =
            "home";

    }


    const finalSection =
        document.getElementById(
            sectionId
        );


    if (!finalSection) {
        return;
    }


    /* SHOW */

    finalSection.classList.add(
        "active-section"
    );


    /* ACTIVE NAV */

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


    /* CLOSE MOBILE */

    closeMobileMenu();


    /* URL */

    if (updateURL) {

        history.pushState(
            null,
            "",
            "#" + sectionId
        );

    }


    /* TOP */

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
   CLOSE MOBILE MENU OUTSIDE
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
   HERO BUTTONS
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
   FINISHED
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
