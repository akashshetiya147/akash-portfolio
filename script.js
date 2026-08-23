/* =====================================================
   CERTIFICATES
===================================================== */

const certificates = [

    {
        number: "CERT",

        title: "Python (Basic)",

        issuer: "HACKERRANK",

        description:
            "Python programming certification covering fundamentals, programming concepts and problem solving.",

        date: "2026",

        url:
            "https://www.linkedin.com/feed/update/urn:li:activity:7469989380703604736/"
    },


    {
        number: "CERT",

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


    if (!container) return;


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

                    ${certificate.number}

                </div>


                <div class="certificate-content">

                    <span>

                        ${certificate.issuer}

                    </span>


                    <h3>

                        ${certificate.title}

                    </h3>


                    <p>

                        ${certificate.description}

                    </p>


                    <small>

                        ISSUED ${certificate.date}

                    </small>

                </div>


                <a
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
   GITHUB PROJECTS
===================================================== */

const githubUsername =
    "akashshetiya147";


async function loadGitHubProjects() {


    const container =
        document.getElementById(
            "githubProjects"
        );


    if (!container) return;


    try {


        const response =
            await fetch(

                `https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc&per_page=12`

            );


        if (!response.ok) {

            throw new Error(
                "GitHub request failed"
            );

        }


        const repos =
            await response.json();


        if (
            !Array.isArray(repos) ||
            repos.length === 0
        ) {

            showGitHubMessage(
                container,
                "NO PUBLIC PROJECTS YET"
            );

            return;

        }


        container.innerHTML = "";


        repos.forEach(
            function(repo, index) {


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


                card.innerHTML = `

                    <div class="project-top">

                        <span>
                            PROJECT
                        </span>

                        <span>

                            ${escapeHTML(
                                language.toUpperCase()
                            )}

                        </span>

                    </div>


                    <div class="project-symbol">

                        &lt;/&gt;

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


                    <div class="github-stats">

                        ★
                        ${repo.stargazers_count || 0}

                        &nbsp;&nbsp;

                        ⑂
                        ${repo.forks_count || 0}

                    </div>


                    <a
                        href="${repo.html_url}"
                        target="_blank"
                        rel="noopener noreferrer">

                        VIEW PROJECT →

                    </a>

                `;


                container.appendChild(card);

            }
        );


    }

    catch (error) {


        console.error(
            error
        );


        showGitHubMessage(
            container,
            "COULD NOT LOAD PROJECTS"
        );

    }

}



/* =====================================================
   GITHUB FALLBACK
===================================================== */

function showGitHubMessage(
    container,
    message
) {


    container.innerHTML = `

        <div class="loading-projects">

            <strong>

                ${message}

            </strong>


            <a
                href="https://github.com/akashshetiya147"
                target="_blank"
                rel="noopener noreferrer"
                style="
                    color:#00d9ff;
                    text-decoration:none;
                    margin-top:15px;
                ">

                OPEN MY GITHUB →

            </a>

        </div>

    `;

}



/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        value;

    return div.innerHTML;

}


loadGitHubProjects();



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

    if (!nav) return;


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



/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

function closeMobileMenu() {

    if (!nav) return;


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
   SHOW ONLY SELECTED SECTION
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


    const selectedSection =
        document.getElementById(
            sectionId
        );


    if (!selectedSection) return;


    selectedSection.classList.add(
        "active-section"
    );


    navigationLinks.forEach(
        function(link) {

            link.classList.remove(
                "active-nav"
            );


            if (
                link.getAttribute("href")
                ===
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


                const sectionId =
                    link
                    .getAttribute("href")
                    .substring(1);


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

if (menuBtn) {


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
                        .getAttribute("href")
                        .substring(1);


                    showSection(
                        sectionId
                    );

                }
            );

        }
    );
