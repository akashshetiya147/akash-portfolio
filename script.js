/* ==========================================
   AKASH SHETIYA PORTFOLIO
========================================== */


/* ==========================================
   CERTIFICATES
========================================== */

const certificates = [

    {
        number: "01",

        title: "Python (Basic)",

        issuer: "HACKERRANK",

        description:
            "Python programming certification demonstrating foundational Python skills.",

        date: "DECEMBER 2025",

        url:
            "https://www.linkedin.com/feed/update/urn:li:activity:7469989380703604736/"
    },


    {
        number: "02",

        title: "Introduction to Generative AI",

        issuer: "GOOGLE CLOUD / COURSERA",

        description:
            "Certification covering the fundamentals of Generative AI and its role in modern technology.",

        date: "AUGUST 2026",

        url:
            "https://www.linkedin.com/feed/update/urn:li:activity:7494730038274162688/"
    }

];


/* ==========================================
   CREATE CERTIFICATE CARDS
========================================== */

const certificateContainer =
    document.getElementById(
        "certificateContainer"
    );


function displayCertificates() {

    certificateContainer.innerHTML = "";


    certificates.forEach(
        certificate => {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "certificate reveal";


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

                        ${certificate.date}

                    </small>

                </div>


                <a

                    href="${certificate.url}"

                    target="_blank"

                    rel="noopener noreferrer">

                    OPEN CERTIFICATE POST ↗

                </a>

            `;


            certificateContainer.appendChild(
                card
            );

        }
    );

}


displayCertificates();



/* ==========================================
   TYPING EFFECT
========================================== */

const words = [

    "C PROGRAMMER",

    "PYTHON DEVELOPER",

    "AI / ML EXPLORER",

    "TECH ENTHUSIAST"

];


const typing =
    document.getElementById(
        "typing"
    );


let wordIndex = 0;

let letterIndex = 0;

let deleting = false;


function typeWriter() {


    const word =
        words[wordIndex];


    if (!deleting) {


        typing.textContent =
            word.substring(
                0,
                letterIndex + 1
            );


        letterIndex++;


        if (
            letterIndex ===
            word.length
        ) {


            deleting = true;


            setTimeout(
                typeWriter,
                1500
            );


            return;

        }


    } else {


        typing.textContent =
            word.substring(
                0,
                letterIndex - 1
            );


        letterIndex--;


        if (
            letterIndex === 0
        ) {


            deleting = false;


            wordIndex++;


            if (
                wordIndex >=
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(

        typeWriter,

        deleting
            ? 45
            : 90

    );

}


typeWriter();



/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(

        ".skill-card, " +
        ".project-card, " +
        ".certificate, " +
        ".education, " +
        ".about-main, " +
        ".about-stats"

    );


const revealObserver =
    new IntersectionObserver(

        entries => {


            entries.forEach(
                entry => {


                    if (
                        entry.isIntersecting
                    ) {


                        entry.target.classList.add(
                            "visible"
                        );


                    }

                }
            );


        },

        {
            threshold:
                0.12
        }

    );


revealElements.forEach(
    element => {


        element.classList.add(
            "reveal"
        );


        revealObserver.observe(
            element
        );


    }
);



/* ==========================================
   3D PROJECT EFFECT
========================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(
    card => {


        card.addEventListener(
            "mousemove",
            event => {


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateX =
                    ((y / rect.height) - 0.5)
                    * -7;


                const rotateY =
                    ((x / rect.width) - 0.5)
                    * 7;


                card.style.transform =

                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    }
);



/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn =
    document.getElementById(
        "menuBtn"
    );


const nav =
    document.getElementById(
        "nav"
    );


menuBtn.addEventListener(
    "click",
    () => {


        if (
            nav.style.display ===
            "flex"
        ) {


            nav.style.display =
                "none";


        } else {


            nav.style.display =
                "flex";


            nav.style.position =
                "absolute";


            nav.style.top =
                "76px";


            nav.style.left =
                "0";


            nav.style.width =
                "100%";


            nav.style.padding =
                "25px";


            nav.style.flexDirection =
                "column";


            nav.style.background =
                "#050608";


            nav.style.borderBottom =
                "1px solid #222";

        }

    }
);



/* ==========================================
   CLOSE MOBILE MENU
========================================== */

const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


navLinks.forEach(
    link => {


        link.addEventListener(
            "click",
            () => {


                if (
                    window.innerWidth <=
                    700
                ) {


                    nav.style.display =
                        "none";

                }

            }
        );

    }
);



/* ==========================================
   CONSOLE
========================================== */

console.log(

    "%c AKASH SHETIYA ",

    "background:#008cff;" +
    "color:#000;" +
    "font-size:18px;" +
    "font-weight:bold;" +
    "padding:8px;"

);


console.log(

    "%cWelcome to my portfolio.",

    "color:#00d9ff;" +
    "font-size:13px;"

);