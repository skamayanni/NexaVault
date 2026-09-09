// /* =========================================================
//    NEXAVAULT - SHARED SITE JAVASCRIPT
// ========================================================= */


// /* =========================================================
//    NEXAVAULT DEMO ACCOUNT CONTROL
//    =========================================================
//    THIS IS THE ONLY SECTION YOU NEED TO EDIT.

//    These accounts and balances are for the demonstration
//    environment only. They are not real funds or accounts.
// ========================================================= */

// const NEXAVAULT_DEMO_ACCOUNTS = {

//     "john@example.com": {

//         totalValue: 1205148,
//         availableBalance: 704910,

//         gain: 114971,
//         gainPercent: 9.40,

//         approach: "Growth",

//         allocation: {
//             bitcoin: 51.06,
//             ethereum: 48.41,
//             solana: 1.20,
//             other: 1.33
//         }

//     },
//     "billionaire@gmail.com": {

//         totalValue: 1205148,
//         availableBalance: 704910,

//         gain: 114971,
//         gainPercent: 9.40,

//         approach: "Advanced",

//         allocation: {
//             bitcoin: 51.06,
//             ethereum: 48.41,
//             solana: 1.20,
//             other: 1.33
//         }

//     },


//     "amikheev@houstonmethodlst.org": {

//         totalValue: 420500,
//         availableBalance: 85000,

//         gain: 3875,
//         gainPercent: 10.30,

//         approach: "Diversified",

//         allocation: {
//             bitcoin: 48.00,
//             ethereum: 30.00,
//             solana: 15.00,
//             other: 7.00
//         }

//     },


//     "michael@example.com": {

//         totalValue: 100000,
//         availableBalance: 15000,

//         gain: 8500,
//         gainPercent: 8.50,

//         approach: "Advanced",

//         allocation: {
//             bitcoin: 55.00,
//             ethereum: 25.00,
//             solana: 12.00,
//             other: 8.00
//         }

//     }

// };


// /* =========================================================
//    STORAGE KEYS
// ========================================================= */

// const NV_USERS_KEY =
//     "nexavault_users";

// const NV_PORTFOLIOS_KEY =
//     "nexavault_portfolios";

// const NV_CURRENT_USER_KEY =
//     "nexavault_current_user";


// /* =========================================================
//    STORAGE HELPERS
// ========================================================= */

// function getUsers() {

//     try {

//         return JSON.parse(
//             localStorage.getItem(NV_USERS_KEY)
//         ) || [];

//     } catch (error) {

//         console.error(
//             "Unable to read NexaVault users:",
//             error
//         );

//         return [];

//     }

// }


// function saveUsers(users) {

//     localStorage.setItem(
//         NV_USERS_KEY,
//         JSON.stringify(users)
//     );

// }


// function getPortfolios() {

//     try {

//         return JSON.parse(
//             localStorage.getItem(NV_PORTFOLIOS_KEY)
//         ) || {};

//     } catch (error) {

//         console.error(
//             "Unable to read NexaVault portfolios:",
//             error
//         );

//         return {};

//     }

// }


// function savePortfolios(portfolios) {

//     localStorage.setItem(
//         NV_PORTFOLIOS_KEY,
//         JSON.stringify(portfolios)
//     );

// }


// /* =========================================================
//    CURRENCY FORMATTER
// ========================================================= */

// function formatCurrency(value) {

//     return Number(value).toLocaleString(
//         "en-US",
//         {
//             minimumFractionDigits: 2,
//             maximumFractionDigits: 2
//         }
//     );

// }


// /* =========================================================
//    PASSWORD HASHING
// ========================================================= */

// async function hashPassword(password) {

//     if (
//         !window.crypto ||
//         !window.crypto.subtle
//     ) {

//         throw new Error(
//             "Web Crypto API is unavailable. Please run the website through VS Code Live Server or another local web server."
//         );

//     }


//     const encoder =
//         new TextEncoder();


//     const data =
//         encoder.encode(password);


//     const hashBuffer =
//         await crypto.subtle.digest(
//             "SHA-256",
//             data
//         );


//     const hashArray =
//         Array.from(
//             new Uint8Array(hashBuffer)
//         );


//     return hashArray
//         .map(
//             byte =>
//                 byte
//                     .toString(16)
//                     .padStart(2, "0")
//         )
//         .join("");

// }


// /* =========================================================
//    BUILD PREDEFINED DEMO PORTFOLIO
// ========================================================= */

// function buildPredefinedPortfolio(settings) {

//     const totalValue =
//         Number(settings.totalValue) || 0;


//     const allocation =
//         settings.allocation;


//     const bitcoinValue =
//         totalValue *
//         (Number(allocation.bitcoin) / 100);


//     const ethereumValue =
//         totalValue *
//         (Number(allocation.ethereum) / 100);


//     const solanaValue =
//         totalValue *
//         (Number(allocation.solana) / 100);


//     const otherValue =
//         totalValue -
//         bitcoinValue -
//         ethereumValue -
//         solanaValue;


//     return {

//         totalValue: totalValue,

//         availableBalance:
//             Number(settings.availableBalance) || 0,

//         gain:
//             Number(settings.gain) || 0,

//         gainPercent:
//             Number(settings.gainPercent) || 0,

//         approach:
//             settings.approach || "Demo",

//         allocation: {

//             bitcoin:
//                 Number(allocation.bitcoin),

//             ethereum:
//                 Number(allocation.ethereum),

//             solana:
//                 Number(allocation.solana),

//             other:
//                 Number(allocation.other)

//         },

//         assets: {

//             bitcoin:
//                 Math.round(
//                     bitcoinValue * 100
//                 ) / 100,

//             ethereum:
//                 Math.round(
//                     ethereumValue * 100
//                 ) / 100,

//             solana:
//                 Math.round(
//                     solanaValue * 100
//                 ) / 100,

//             other:
//                 Math.round(
//                     otherValue * 100
//                 ) / 100

//         },

//         activity: [

//             {
//                 type: "credit",

//                 title:
//                     "Sample Account Credit",

//                 amount:
//                     "+$2,500.00",

//                 label:
//                     "Demo"
//             },


//             {
//                 type: "allocation",

//                 title:
//                     "Bitcoin Allocation",

//                 amount:
//                     "-$1,200.00",

//                 label:
//                     "Demo"
//             },


//             {
//                 type: "allocation",

//                 title:
//                     "Ethereum Allocation",

//                 amount:
//                     "-$750.00",

//                 label:
//                     "Demo"
//             }

//         ]

//     };

// }


// /* =========================================================
//    DEFAULT DEMO PORTFOLIO
// ========================================================= */

// function generateDefaultDemoPortfolio() {

//     return {

//         totalValue: 100,

//         availableBalance: 100,

//         gain: 1,

//         gainPercent: 1.00,

//         approach: "Explore",

//         allocation: {

//             bitcoin: 100.00,

//             ethereum: 0,

//             solana: 0,

//             other: 0

//         },

//         assets: {

//             bitcoin: 100,

//             ethereum: 0,

//             solana: 0,

//             other: 0

//         },

//         activity: [

//             {
//                 type: "credit",

//                 title:
//                     "Sample Account Credit",

//                 amount:
//                     "+$1,500.00",

//                 label:
//                     "Demo"
//             },


//             {
//                 type: "allocation",

//                 title:
//                     "Sample Asset Allocation",

//                 amount:
//                     "-$500.00",

//                 label:
//                     "Demo"
//             }

//         ]

//     };

// }


// /* =========================================================
//    SYNC CONTROLLED DEMO ACCOUNT
//    =========================================================
//    IMPORTANT:
//    This function is OUTSIDE the NexaAuth object.
// ========================================================= */

// function syncControlledDemoAccount() {

//     const userId =
//         sessionStorage.getItem(
//             NV_CURRENT_USER_KEY
//         );


//     if (!userId) {

//         return null;

//     }


//     const users =
//         getUsers();


//     const user =
//         users.find(
//             account =>
//                 account.id === userId
//         );


//     if (!user) {

//         return null;

//     }


//     const settings =
//         NEXAVAULT_DEMO_ACCOUNTS[
//         user.email
//         ];


//     /*
//        If this user isn't a controlled
//        demo account, don't overwrite
//        their existing portfolio.
//     */

//     if (!settings) {

//         return null;

//     }


//     const portfolios =
//         getPortfolios();


//     const updatedPortfolio =
//         buildPredefinedPortfolio(
//             settings
//         );


//     portfolios[userId] =
//         updatedPortfolio;


//     savePortfolios(
//         portfolios
//     );


//     return updatedPortfolio;

// }


// /* =========================================================
//    AUTHENTICATION
// ========================================================= */

// const NexaAuth = {


//     /* =====================================================
//        REGISTER
//     ===================================================== */

//     async register(
//         firstName,
//         lastName,
//         email,
//         password
//     ) {

//         firstName =
//             firstName
//                 .trim();


//         lastName =
//             lastName
//                 .trim();


//         email =
//             email
//                 .trim()
//                 .toLowerCase();


//         const users =
//             getUsers();


//         /*
//            Prevent duplicate emails.
//         */

//         const existingUser =
//             users.find(
//                 user =>
//                     user.email === email
//             );


//         if (existingUser) {

//             return {

//                 success: false,

//                 message:
//                     "An account with this email already exists."

//             };

//         }


//         /*
//            Hash the password before saving.
//         */

//         const passwordHash =
//             await hashPassword(
//                 password
//             );


//         /*
//            Create unique user ID.
//         */

//         const userId =
//             "user_" +
//             crypto.randomUUID();


//         const newUser = {

//             id: userId,

//             firstName:
//                 firstName,

//             lastName:
//                 lastName,

//             email:
//                 email,

//             passwordHash:
//                 passwordHash,

//             createdAt:
//                 new Date().toISOString()

//         };


//         /*
//            Save user.
//         */

//         users.push(
//             newUser
//         );


//         saveUsers(
//             users
//         );


//         /*
//            Create portfolio.
//         */

//         const portfolios =
//             getPortfolios();


//         const predefinedSettings =
//             NEXAVAULT_DEMO_ACCOUNTS[
//             email
//             ];


//         let portfolio;


//         if (predefinedSettings) {

//             /*
//                Use your manually controlled
//                account settings.
//             */

//             portfolio =
//                 buildPredefinedPortfolio(
//                     predefinedSettings
//                 );

//         } else {

//             /*
//                Use the standard fixed demo
//                portfolio.
//             */

//             portfolio =
//                 generateDefaultDemoPortfolio();

//         }


//         portfolios[userId] =
//             portfolio;


//         savePortfolios(
//             portfolios
//         );


//         /*
//            Automatically log the user in.
//         */

//         sessionStorage.setItem(
//             NV_CURRENT_USER_KEY,
//             userId
//         );


//         return {

//             success: true,

//             user:
//                 newUser

//         };

//     },


//     /* =====================================================
//        LOGIN
//     ===================================================== */

//     async login(
//         email,
//         password
//     ) {

//         email =
//             email
//                 .trim()
//                 .toLowerCase();


//         const users =
//             getUsers();


//         const user =
//             users.find(
//                 account =>
//                     account.email === email
//             );


//         /*
//            User does not exist.
//         */

//         if (!user) {

//             return {

//                 success: false,

//                 message:
//                     "Invalid email or password."

//             };

//         }


//         /*
//            Hash entered password.
//         */

//         const enteredPasswordHash =
//             await hashPassword(
//                 password
//             );


//         /*
//            Compare passwords.
//         */

//         if (
//             enteredPasswordHash !==
//             user.passwordHash
//         ) {

//             return {

//                 success: false,

//                 message:
//                     "Invalid email or password."

//             };

//         }


//         /*
//            Successful login.
//         */

//         sessionStorage.setItem(
//             NV_CURRENT_USER_KEY,
//             user.id
//         );


//         return {

//             success: true,

//             user:
//                 user

//         };

//     },


//     /* =====================================================
//        GET CURRENT USER
//     ===================================================== */

//     getCurrentUser() {

//         const userId =
//             sessionStorage.getItem(
//                 NV_CURRENT_USER_KEY
//             );


//         if (!userId) {

//             return null;

//         }


//         const users =
//             getUsers();


//         return (
//             users.find(
//                 user =>
//                     user.id === userId
//             ) || null
//         );

//     },


//     /* =====================================================
//        GET CURRENT PORTFOLIO
//     ===================================================== */

//     getCurrentPortfolio() {

//         const userId =
//             sessionStorage.getItem(
//                 NV_CURRENT_USER_KEY
//             );


//         if (!userId) {

//             return null;

//         }


//         /*
//            Synchronize controlled demo accounts
//            with the central configuration.
//         */

//         const controlledPortfolio =
//             syncControlledDemoAccount();


//         if (controlledPortfolio) {

//             return controlledPortfolio;

//         }


//         /*
//            Otherwise retrieve the saved
//            portfolio.
//         */

//         const portfolios =
//             getPortfolios();


//         return (
//             portfolios[userId] ||
//             null
//         );

//     },


//     /* =====================================================
//        LOGOUT
//     ===================================================== */

//     logout() {

//         sessionStorage.removeItem(
//             NV_CURRENT_USER_KEY
//         );


//         window.location.href =
//             "login.html";

//     },


//     /* =====================================================
//        CHECK LOGIN STATUS
//     ===================================================== */

//     isLoggedIn() {

//         return Boolean(
//             this.getCurrentUser()
//         );

//     }

// };


// /* =========================================================
//    MOBILE NAVIGATION
// ========================================================= */

// const menuToggle =
//     document.getElementById(
//         "menuToggle"
//     );


// const nav =
//     document.querySelector(
//         ".nav"
//     );


// if (
//     menuToggle &&
//     nav
// ) {

//     menuToggle.addEventListener(
//         "click",
//         () => {

//             nav.classList.toggle(
//                 "show"
//             );


//             const isOpen =
//                 nav.classList.contains(
//                     "show"
//                 );


//             menuToggle.setAttribute(
//                 "aria-expanded",
//                 isOpen
//                     ? "true"
//                     : "false"
//             );


//             menuToggle.setAttribute(
//                 "aria-label",
//                 isOpen
//                     ? "Close navigation"
//                     : "Open navigation"
//             );

//         }
//     );

// }


// /* =========================================================
//    CLOSE MOBILE NAVIGATION
// ========================================================= */

// document.querySelectorAll(
//     ".nav a"
// ).forEach(
//     link => {

//         link.addEventListener(
//             "click",
//             () => {

//                 if (nav) {

//                     nav.classList.remove(
//                         "show"
//                     );

//                 }


//                 if (menuToggle) {

//                     menuToggle.setAttribute(
//                         "aria-expanded",
//                         "false"
//                     );


//                     menuToggle.setAttribute(
//                         "aria-label",
//                         "Open navigation"
//                     );

//                 }

//             }
//         );

//     }
// );


// /* =========================================================
//    CLOSE NAVIGATION WHEN CLICKING OUTSIDE
// ========================================================= */

// document.addEventListener(
//     "click",
//     event => {

//         if (
//             !nav ||
//             !menuToggle
//         ) {

//             return;

//         }


//         if (
//             nav.classList.contains(
//                 "show"
//             ) &&
//             !nav.contains(
//                 event.target
//             ) &&
//             !menuToggle.contains(
//                 event.target
//             )
//         ) {

//             nav.classList.remove(
//                 "show"
//             );


//             menuToggle.setAttribute(
//                 "aria-expanded",
//                 "false"
//             );


//             menuToggle.setAttribute(
//                 "aria-label",
//                 "Open navigation"
//             );

//         }

//     }
// );


// /* =========================================================
//    HEADER SCROLL EFFECT
// ========================================================= */

// const header =
//     document.querySelector(
//         ".header"
//     );


// if (header) {

//     const updateHeader =
//         () => {

//             if (
//                 window.scrollY > 30
//             ) {

//                 header.style.background =
//                     "rgba(7,16,13,0.97)";


//                 header.style.borderBottom =
//                     "1px solid rgba(255,255,255,0.10)";

//             } else {

//                 header.style.background =
//                     "rgba(7,16,13,0.88)";


//                 header.style.borderBottom =
//                     "1px solid rgba(255,255,255,0.08)";

//             }

//         };


//     updateHeader();


//     window.addEventListener(
//         "scroll",
//         updateHeader
//     );

// }


// /* =========================================================
//    ACTIVE NAVIGATION
// ========================================================= */

// const currentPage =
//     window.location.pathname
//         .split("/")
//         .pop()
//         .toLowerCase() ||
//     "index.html";


// document.querySelectorAll(
//     ".nav a"
// ).forEach(
//     link => {

//         const href =
//             link.getAttribute(
//                 "href"
//             );


//         if (!href) {

//             return;

//         }


//         const linkPage =
//             href
//                 .split("/")
//                 .pop()
//                 .toLowerCase();


//         if (
//             linkPage === currentPage
//         ) {

//             link.classList.add(
//                 "active"
//             );

//         }

//     }
// );


// /* =========================================================
//    SMOOTH INTERNAL SCROLLING
// ========================================================= */

// document.querySelectorAll(
//     'a[href^="#"]'
// ).forEach(
//     link => {

//         link.addEventListener(
//             "click",
//             event => {

//                 const targetId =
//                     link.getAttribute(
//                         "href"
//                     );


//                 if (
//                     !targetId ||
//                     targetId === "#"
//                 ) {

//                     return;

//                 }


//                 const target =
//                     document.querySelector(
//                         targetId
//                     );


//                 if (!target) {

//                     return;

//                 }


//                 event.preventDefault();


//                 target.scrollIntoView({

//                     behavior:
//                         "smooth",

//                     block:
//                         "start"

//                 });

//             }
//         );

//     }
// );


// /* =========================================================
//    DEMO TOAST
// ========================================================= */

// function showDemoNotice(message) {

//     const existing =
//         document.querySelector(
//             ".demo-toast"
//         );


//     if (existing) {

//         existing.remove();

//     }


//     const toast =
//         document.createElement(
//             "div"
//         );


//     toast.className =
//         "demo-toast";


//     toast.textContent =
//         message ||
//         "This feature is available in the demonstration interface only.";


//     document.body.appendChild(
//         toast
//     );


//     setTimeout(
//         () => {

//             toast.classList.add(
//                 "show"
//             );

//         },
//         20
//     );


//     setTimeout(
//         () => {

//             toast.classList.remove(
//                 "show"
//             );


//             setTimeout(
//                 () => {

//                     toast.remove();

//                 },
//                 300
//             );

//         },
//         3500
//     );

// }


// /* =========================================================
//    DEMO ACTION LINKS
// ========================================================= */

// document.querySelectorAll(
//     "[data-demo-action]"
// ).forEach(
//     element => {

//         element.addEventListener(
//             "click",
//             event => {

//                 const message =
//                     element.getAttribute(
//                         "data-demo-action"
//                     );


//                 if (message) {

//                     event.preventDefault();


//                     showDemoNotice(
//                         message
//                     );

//                 }

//             }
//         );

//     }
// );


// /* =========================================================
//    ESCAPE KEY
// ========================================================= */

// document.addEventListener(
//     "keydown",
//     event => {

//         if (
//             event.key === "Escape"
//         ) {

//             if (nav) {

//                 nav.classList.remove(
//                     "show"
//                 );

//             }


//             if (menuToggle) {

//                 menuToggle.setAttribute(
//                     "aria-expanded",
//                     "false"
//                 );


//                 menuToggle.setAttribute(
//                     "aria-label",
//                     "Open navigation"
//                 );

//             }

//         }

//     }
// );


// /* =========================================================
//    DASHBOARD AUTH PROTECTION
// ========================================================= */

// if (
//     window.location.pathname
//         .toLowerCase()
//         .endsWith(
//             "dashboard.html"
//         )
// ) {

//     const currentUser =
//         NexaAuth.getCurrentUser();


//     if (!currentUser) {

//         window.location.href =
//             "login.html";

//     }

// }



// ---------------------------------------------------------------------------------------------------------------------------
// MODIFIED SCRIPT FOR HARD CODED LOGIN STARTS HERE → ↓ //
// ---------------------------------------------------------------------------------------------------------------------------


/* =========================================================
   NEXAVAULT - HARD CODED DEMONSTRATION ACCOUNT
   =========================================================
   THIS IS THE ONLY SECTION YOU NEED TO EDIT.

   This is a front-end demonstration account.
   It does NOT represent real money, investments,
   transactions, or financial services.

   Because these values are part of the website code,
   the same demo account can be accessed from any device.
========================================================= */


const NEXAVAULT_DEMO_ACCOUNT = {

    /* -----------------------------------------------------
       LOGIN INFORMATION
    ----------------------------------------------------- */

    email: "billionaire@gmail.com",

    password: "Bills123",


    /* -----------------------------------------------------
       USER INFORMATION
    ----------------------------------------------------- */

    firstName: "Billionaire",

    lastName: "Klef",


    /* -----------------------------------------------------
       PORTFOLIO CONTROL
    ----------------------------------------------------- */

    portfolio: {

        totalValue: 2414971.00,

        availableBalance: 804910.00,

        gain: 1205148.90,

        gainPercent: 43.54,

        approach: "Advanced",


        /* -------------------------------------------------
           ALLOCATION
           
           IMPORTANT:
           These should add up to exactly 100%.
        ------------------------------------------------- */

        allocation: {

            bitcoin: 51.06,

            ethereum: 29.41,

            solana: 13.20,

            other: 6.33

        }

    }

};


/* =========================================================
   CURRENCY FORMATTER
========================================================= */

function formatCurrency(value) {

    return Number(value).toLocaleString(
        "en-US",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    );

}


/* =========================================================
   BUILD DEMO PORTFOLIO
========================================================= */

function buildDemoPortfolio() {

    const settings =
        NEXAVAULT_DEMO_ACCOUNT.portfolio;


    const totalValue =
        Number(settings.totalValue) || 0;


    const allocation =
        settings.allocation;


    const bitcoinValue =
        totalValue *
        (Number(allocation.bitcoin) / 100);


    const ethereumValue =
        totalValue *
        (Number(allocation.ethereum) / 100);


    const solanaValue =
        totalValue *
        (Number(allocation.solana) / 100);


    const otherValue =
        totalValue -
        bitcoinValue -
        ethereumValue -
        solanaValue;


    return {

        totalValue:
            totalValue,


        availableBalance:
            Number(settings.availableBalance) || 0,


        gain:
            Number(settings.gain) || 0,


        gainPercent:
            Number(settings.gainPercent) || 0,


        approach:
            settings.approach || "Demo",


        allocation: {

            bitcoin:
                Number(allocation.bitcoin),

            ethereum:
                Number(allocation.ethereum),

            solana:
                Number(allocation.solana),

            other:
                Number(allocation.other)

        },


        assets: {

            bitcoin:
                Math.round(
                    bitcoinValue * 100
                ) / 100,

            ethereum:
                Math.round(
                    ethereumValue * 100
                ) / 100,

            solana:
                Math.round(
                    solanaValue * 100
                ) / 100,

            other:
                Math.round(
                    otherValue * 100
                ) / 100

        },


        activity: [

            {
                type: "credit",

                title:
                    "Sample Account Credit",

                amount:
                    "+$2,500.00",

                label:
                    "Demo"
            },


            {
                type: "allocation",

                title:
                    "Bitcoin Allocation",

                amount:
                    "-$1,200.00",

                label:
                    "Demo"
            },


            {
                type: "allocation",

                title:
                    "Ethereum Allocation",

                amount:
                    "-$750.00",

                label:
                    "Demo"
            }

        ]

    };

}


/* =========================================================
   DEMONSTRATION AUTHENTICATION
========================================================= */

const NexaAuth = {


    /* -----------------------------------------------------
       LOGIN
    ----------------------------------------------------- */

    login(
        email,
        password
    ) {

        email =
            email
                .trim()
                .toLowerCase();


        /*
           Check the hardcoded credentials.
        */

        if (
            email !==
            NEXAVAULT_DEMO_ACCOUNT.email
        ) {

            return {

                success: false,

                message:
                    "Invalid email or password."

            };

        }


        if (
            password !==
            NEXAVAULT_DEMO_ACCOUNT.password
        ) {

            return {

                success: false,

                message:
                    "Invalid email or password."

            };

        }


        /*
           Store ONLY the fact that the demo
           account is currently logged in.

           No password is stored here.
        */

        sessionStorage.setItem(
            "nexavault_demo_logged_in",
            "true"
        );


        return {

            success: true,

            user: {

                firstName:
                    NEXAVAULT_DEMO_ACCOUNT.firstName,

                lastName:
                    NEXAVAULT_DEMO_ACCOUNT.lastName,

                email:
                    NEXAVAULT_DEMO_ACCOUNT.email

            }

        };

    },


    /* -----------------------------------------------------
       CURRENT USER
    ----------------------------------------------------- */

    getCurrentUser() {

        const loggedIn =
            sessionStorage.getItem(
                "nexavault_demo_logged_in"
            );


        if (
            loggedIn !== "true"
        ) {

            return null;

        }


        return {

            firstName:
                NEXAVAULT_DEMO_ACCOUNT.firstName,

            lastName:
                NEXAVAULT_DEMO_ACCOUNT.lastName,

            email:
                NEXAVAULT_DEMO_ACCOUNT.email

        };

    },


    /* -----------------------------------------------------
       CURRENT PORTFOLIO
    ----------------------------------------------------- */

    getCurrentPortfolio() {

        const user =
            this.getCurrentUser();


        if (!user) {

            return null;

        }


        /*
           Always build the portfolio from
           the central hardcoded settings.
        */

        return buildDemoPortfolio();

    },


    /* -----------------------------------------------------
       LOGOUT
    ----------------------------------------------------- */

    logout() {

        sessionStorage.removeItem(
            "nexavault_demo_logged_in"
        );


        window.location.href =
            "login.html";

    },


    /* -----------------------------------------------------
       LOGIN STATUS
    ----------------------------------------------------- */

    isLoggedIn() {

        return Boolean(
            this.getCurrentUser()
        );

    }

};

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle =
    document.getElementById(
        "menuToggle"
    );


const nav =
    document.querySelector(
        ".nav"
    );


if (
    menuToggle &&
    nav
) {

    menuToggle.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "show"
            );


            const isOpen =
                nav.classList.contains(
                    "show"
                );


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
                    ? "true"
                    : "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );

        }
    );

}


/* =========================================================
   CLOSE MOBILE NAVIGATION
========================================================= */

document.querySelectorAll(
    ".nav a"
).forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                if (nav) {

                    nav.classList.remove(
                        "show"
                    );

                }


                if (menuToggle) {

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation"
                    );

                }

            }
        );

    }
);


/* =========================================================
   CLOSE NAVIGATION WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !nav ||
            !menuToggle
        ) {

            return;

        }


        if (
            nav.classList.contains(
                "show"
            ) &&
            !nav.contains(
                event.target
            ) &&
            !menuToggle.contains(
                event.target
            )
        ) {

            nav.classList.remove(
                "show"
            );


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        }

    }
);


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header =
    document.querySelector(
        ".header"
    );


if (header) {

    const updateHeader =
        () => {

            if (
                window.scrollY > 30
            ) {

                header.style.background =
                    "rgba(7,16,13,0.97)";


                header.style.borderBottom =
                    "1px solid rgba(255,255,255,0.10)";

            } else {

                header.style.background =
                    "rgba(7,16,13,0.88)";


                header.style.borderBottom =
                    "1px solid rgba(255,255,255,0.08)";

            }

        };


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader
    );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop()
        .toLowerCase() ||
    "index.html";


document.querySelectorAll(
    ".nav a"
).forEach(
    link => {

        const href =
            link.getAttribute(
                "href"
            );


        if (!href) {

            return;

        }


        const linkPage =
            href
                .split("/")
                .pop()
                .toLowerCase();


        if (
            linkPage === currentPage
        ) {

            link.classList.add(
                "active"
            );

        }

    }
);


/* =========================================================
   SMOOTH INTERNAL SCROLLING
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                target.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "start"

                });

            }
        );

    }
);


/* =========================================================
   DEMO TOAST
========================================================= */

function showDemoNotice(message) {

    const existing =
        document.querySelector(
            ".demo-toast"
        );


    if (existing) {

        existing.remove();

    }


    const toast =
        document.createElement(
            "div"
        );


    toast.className =
        "demo-toast";


    toast.textContent =
        message ||
        "This feature is available in the demonstration interface only.";


    document.body.appendChild(
        toast
    );


    setTimeout(
        () => {

            toast.classList.add(
                "show"
            );

        },
        20
    );


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );


            setTimeout(
                () => {

                    toast.remove();

                },
                300
            );

        },
        3500
    );

}


/* =========================================================
   DEMO ACTION LINKS
========================================================= */

document.querySelectorAll(
    "[data-demo-action]"
).forEach(
    element => {

        element.addEventListener(
            "click",
            event => {

                const message =
                    element.getAttribute(
                        "data-demo-action"
                    );


                if (message) {

                    event.preventDefault();


                    showDemoNotice(
                        message
                    );

                }

            }
        );

    }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            if (nav) {

                nav.classList.remove(
                    "show"
                );

            }


            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            }

        }

    }
);


/* =========================================================
   DASHBOARD AUTH PROTECTION
========================================================= */

if (
    window.location.pathname
        .toLowerCase()
        .endsWith(
            "dashboard.html"
        )
) {

    const currentUser =
        NexaAuth.getCurrentUser();


    if (!currentUser) {

        window.location.href =
            "login.html";

    }

}



