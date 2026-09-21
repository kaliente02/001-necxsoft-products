/* =========================================
   NEXA CRM
   FRONTEND JAVASCRIPT
========================================= */


/* =========================================
   PAGE NAVIGATION
========================================= */

const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");

const pageInfo = {

    dashboard: {
        title: "Dashboard",
        subtitle: "Welcome back. Here's what's happening today."
    },

    leads: {
        title: "Leads",
        subtitle: "Manage your potential customers."
    },

    bookings: {
        title: "Bookings",
        subtitle: "Website development booking requests."
    },

    clients: {
        title: "Clients",
        subtitle: "Manage your existing customers."
    },

    projects: {
        title: "Projects",
        subtitle: "Track website development projects."
    },

    proposals: {
        title: "Proposals",
        subtitle: "Manage website development proposals."
    },

    tasks: {
        title: "Tasks",
        subtitle: "Manage your team's development tasks."
    },

    followups: {
        title: "Follow-ups",
        subtitle: "Never miss an opportunity."
    },

    team: {
        title: "Team",
        subtitle: "Manage your CRM team members."
    },

    settings: {
        title: "Settings",
        subtitle: "Configure your CRM."
    }

};


/* =========================================
   SHOW PAGE
========================================= */

function showPage(pageName) {

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    navItems.forEach(item => {
        item.classList.remove("active");
    });


    const selectedPage =
        document.getElementById(pageName);

    const selectedNav =
        document.querySelector(
            `[data-page="${pageName}"]`
        );


    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    if (selectedNav) {
        selectedNav.classList.add("active");
    }


    if (pageInfo[pageName]) {

        pageTitle.textContent =
            pageInfo[pageName].title;

        pageSubtitle.textContent =
            pageInfo[pageName].subtitle;
    }


    /* Close mobile sidebar */

    document
        .getElementById("sidebar")
        .classList.remove("open");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   NAVIGATION EVENTS
========================================= */

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const page =
            item.getAttribute("data-page");

        showPage(page);

    });

});


/* =========================================
   GLOBAL SEARCH
========================================= */

const globalSearch =
    document.getElementById("globalSearch");


if (globalSearch) {

    globalSearch.addEventListener(
        "input",
        function () {

            const searchValue =
                this.value.toLowerCase().trim();


            if (!searchValue) {
                return;
            }


            /*
                Basic prototype search.

                Later this can connect to
                a database/API.
            */

            const rows =
                document.querySelectorAll(
                    "tbody tr"
                );


            rows.forEach(row => {

                const text =
                    row.textContent.toLowerCase();

                row.style.display =
                    text.includes(searchValue)
                        ? ""
                        : "none";

            });

        }
    );

}


/* =========================================
   LEAD SEARCH
========================================= */

const leadSearch =
    document.getElementById("leadSearch");


if (leadSearch) {

    leadSearch.addEventListener(
        "input",
        function () {

            const value =
                this.value.toLowerCase();

            const rows =
                document.querySelectorAll(
                    "#leadsTable tbody tr"
                );


            rows.forEach(row => {

                const text =
                    row.textContent.toLowerCase();

                if (text.includes(value)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }

            });

        }
    );

}


/* =========================================
   MOBILE MENU
========================================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const sidebar =
    document.getElementById("sidebar");


if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle("open");

        }
    );

}


/* =========================================
   ADD LEAD MODAL
========================================= */

const modal =
    document.getElementById("modal");


function openModal() {

    modal.classList.add("show");

}


function closeModal() {

    modal.classList.remove("show");

}


/* Close modal when clicking outside */

if (modal) {

    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === modal) {

                closeModal();

            }

        }
    );

}


/* =========================================
   ADD LEAD
========================================= */

const leadForm =
    document.getElementById("leadForm");


if (leadForm) {

    leadForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                this.querySelector(
                    'input[placeholder="John Doe"]'
                ).value;


            const business =
                this.querySelector(
                    'input[placeholder="ABC Business"]'
                ).value;


            if (!name || !business) {

                alert(
                    "Please enter the customer's name and business."
                );

                return;

            }


            /*
                Frontend prototype only.

                Later:
                POST this information
                to your backend/database.
            */

            alert(
                "Lead added successfully!"
            );


            this.reset();

            closeModal();

        }
    );

}


/* =========================================
   BUTTON EFFECTS
========================================= */

document
    .querySelectorAll(".primary-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                this.style.transform =
                    "scale(0.98)";


                setTimeout(() => {

                    this.style.transform =
                        "";

                }, 100);

            }
        );

    });


/* =========================================
   INITIAL PAGE
========================================= */

showPage("dashboard");
