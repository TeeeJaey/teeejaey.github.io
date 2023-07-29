(this["webpackJsonpportfolio-app"] = this["webpackJsonpportfolio-app"] || []).push([
    [0],
    Array(19).concat([
        function (e, t, a) {
            e.exports = a.p + "static/media/DN.d42a2095.jpg";
        },
        ,
        ,
        ,
        ,
        function (e, t, a) {
            e.exports = a.p + "static/media/here.e3a69f7b.jpg";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/profileTransparent.30cdab2e.png";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/mtechTransparent.4ebc9db7.png";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/btechTransparent.9645112f.png";
        },
        ,
        function (e, t, a) {},
        ,
        function (e, t, a) {
            e.exports = a.p + "static/media/menuBG.950cb34d.png";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/MovieTrailers.2471efe9.png";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/BoardGames.662d6f9f.png";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/MernPos.9b205973.png";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/ChatBot.e9bd5835.png";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/MyWay.d964cc21.png";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/SendMyCell.c0a1e607.png";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/SignatureVerifier.7ea1077b.png";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/RaceIt.ceca7292.png";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/Meditation.ee0c1479.png";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/SnakeLadder.a4f8c787.png";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/MobileMailImg.9a528d41.png";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/PortFolioImg.03a1fc5d.png";
        },
        ,
        function (e, t, a) {
            e.exports = a(67);
        },
        ,
        ,
        ,
        ,
        function (e, t, a) {},
        function (e, t, a) {},
        function (e, t, a) {},
        ,
        function (e, t, a) {},
        function (e, t, a) {},
        function (e, t, a) {},
        function (e, t, a) {},
        function (e, t, a) {},
        function (e, t, a) {},
        function (e, t, a) {},
        function (e, t, a) {},
        function (e, t, a) {},
        function (e, t, a) {},
        function (e, t, a) {},
        function (e, t, a) {},
        function (e, t, a) {},
        function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(1),
                c = a.n(n),
                i = a(30),
                l = a.n(i),
                s = (a(50), a(5)),
                r = a(3),
                m = (a(51), { Welcome: -1, About: 0, Experience: 1, Skills: 2, Education: 3, Work: 4, Contact: 5 }),
                o = ["About", "Experience", "Skills", "Education", "Work", "Contact"],
                d = (a(29), a(52), a(24)),
                u = a.n(d),
                E = a(19),
                p = a.n(E);
            function v() {
                var e = new Date("2018-07-18"),
                    t = new Date(),
                    a = t.getMonth() - e.getMonth() + 12 * (t.getFullYear() - e.getFullYear());
                return { years: Math.floor(a / 12), months: a % 12 };
            }
            function f(e) {
                var t = e.selectedTab;
                return (
                    Object(n.useEffect)(
                        function () {
                            t !== m.Experience
                                ? document.getElementById("experience").classList.add("off")
                                : document.getElementById("experience").classList.remove("off");
                        },
                        [t],
                    ),
                    c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                            "div",
                            { id: "experience", className: "main-view off" },
                            c.a.createElement("div", { className: "header" }, "Experience"),
                            c.a.createElement(
                                "div",
                                { className: "total-exp" },
                                (function () {
                                    var e = v();
                                    return e.years + " years, " + e.months + " months";
                                })(),
                            ),
                            c.a.createElement(
                                "div",
                                { className: "content-container" },
                                c.a.createElement(
                                    "div",
                                    { className: "d-flex edex-item" },
                                    c.a.createElement("div", { className: "edex-span" }, "Since ", c.a.createElement("br", null), "Jan 2022"),
                                    c.a.createElement(
                                        "div",
                                        { className: "edex-value" },
                                        c.a.createElement("div", { className: "edex-title" }, "FrontEnd Developer"),
                                        c.a.createElement(
                                            "div",
                                            { className: "edex-company" },
                                            c.a.createElement(
                                                "span",
                                                {
                                                    className: "link",
                                                    onClick: function () {
                                                        return window.open("https://www.here.com/");
                                                    },
                                                },
                                                "Here Tech",
                                            ),
                                        ),
                                        c.a.createElement(
                                            "div",
                                            { className: "edex-techstack" },
                                            c.a.createElement("span", { className: "techstack-item" }, "Angular"),
                                            c.a.createElement("span", { className: "techstack-item" }, "React"),
                                            c.a.createElement("span", { className: "techstack-item" }, "TypeScript"),
                                        ),
                                        c.a.createElement(
                                            "ul",
                                            { className: "edex-content" },
                                            c.a.createElement(
                                                "li",
                                                null,
                                                "Working on design & development of",
                                                c.a.createElement(
                                                    "span",
                                                    {
                                                        className: "link",
                                                        onClick: function () {
                                                            return window.open("https://www.here.com/platform/HD-live-map");
                                                        },
                                                    },
                                                    " HD Live Map Viewer ",
                                                ),
                                                "and",
                                                c.a.createElement(
                                                    "span",
                                                    {
                                                        className: "link",
                                                        onClick: function () {
                                                            return window.open("https://wego.here.com/");
                                                        },
                                                    },
                                                    " Here WEGO Web ",
                                                ),
                                            ),
                                        ),
                                        c.a.createElement(
                                            "div",
                                            { className: "edex-image-mobile" },
                                            c.a.createElement("img", { src: u.a, alt: "hereImg" }),
                                        ),
                                    ),
                                    c.a.createElement("div", { className: "edex-image" }, c.a.createElement("img", { src: u.a, alt: "hereImg" })),
                                ),
                                c.a.createElement(
                                    "div",
                                    { className: "d-flex edex-item" },
                                    c.a.createElement("div", { className: "edex-span" }, "Jul 2018 ", c.a.createElement("br", null), "- Dec 2021"),
                                    c.a.createElement(
                                        "div",
                                        { className: "edex-value" },
                                        c.a.createElement("div", { className: "edex-title" }, "FullStack Developer"),
                                        c.a.createElement(
                                            "div",
                                            { className: "edex-company" },
                                            c.a.createElement(
                                                "span",
                                                {
                                                    className: "link",
                                                    onClick: function () {
                                                        return window.open("https://www.dieboldnixdorf.com/");
                                                    },
                                                },
                                                "Diebold Nixdorf",
                                            ),
                                        ),
                                        c.a.createElement(
                                            "div",
                                            { className: "edex-techstack" },
                                            c.a.createElement("span", { className: "techstack-item" }, "C#.Net"),
                                            c.a.createElement("span", { className: "techstack-item" }, "Angular"),
                                            c.a.createElement("span", { className: "techstack-item" }, "SQL"),
                                            c.a.createElement("span", { className: "techstack-item" }, "NodeJS"),
                                        ),
                                        c.a.createElement(
                                            "ul",
                                            { className: "edex-content" },
                                            c.a.createElement(
                                                "li",
                                                null,
                                                "Worked on design & development",
                                                " ",
                                                c.a.createElement(
                                                    "span",
                                                    {
                                                        className: "link",
                                                        onClick: function () {
                                                            return window.open(
                                                                "https://www.dieboldnixdorf.com/en-us/retail/portfolio/systems/pos-systems/",
                                                            );
                                                        },
                                                    },
                                                    " Retail POS Systems ",
                                                ),
                                                "and",
                                                c.a.createElement(
                                                    "span",
                                                    {
                                                        className: "link",
                                                        onClick: function () {
                                                            return window.open(
                                                                "https://www.dieboldnixdorf.com/en-us/retail/portfolio/systems/self-service-overview/",
                                                            );
                                                        },
                                                    },
                                                    " Retail Self-Service Systems ",
                                                ),
                                            ),
                                        ),
                                        c.a.createElement(
                                            "div",
                                            { className: "edex-image-mobile" },
                                            c.a.createElement("img", { src: p.a, alt: p.a }),
                                        ),
                                    ),
                                    c.a.createElement("div", { className: "edex-image" }, c.a.createElement("img", { src: p.a, alt: p.a })),
                                ),
                            ),
                        ),
                    )
                );
            }
            var g = a(7);
            function h(e) {
                var t = e.selectedTab,
                    a = e.setSelectedTab;
                return (
                    Object(n.useEffect)(
                        function () {
                            t !== m.About
                                ? document.getElementById("about").classList.add("off")
                                : document.getElementById("about").classList.remove("off");
                        },
                        [t],
                    ),
                    c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                            "div",
                            { id: "about", className: "main-view off" },
                            c.a.createElement("div", { className: "header" }, "About"),
                            c.a.createElement(
                                "div",
                                { className: "content-container" },
                                c.a.createElement(
                                    "div",
                                    { className: "content" },
                                    "Hi, I am ",
                                    c.a.createElement("span", { className: "highlight name" }, "Tejas Jadhav"),
                                    ".",
                                    c.a.createElement("br", null),
                                    " A 90s kid living in Mumbai.",
                                ),
                                c.a.createElement(
                                    "div",
                                    { className: "content" },
                                    "Full-Stack / Front-end ",
                                    c.a.createElement("span", { className: "highlight" }, " Web Developer "),
                                    " & FreeLancer with over",
                                    c.a.createElement("span", { className: "highlight" }, " ", v().years, " years of experience"),
                                    ".",
                                    c.a.createElement("br", null),
                                    "I have a ",
                                    c.a.createElement("span", { className: "highlight" }, "Master degree"),
                                    " in Computer Engineering.",
                                ),
                                c.a.createElement(
                                    "div",
                                    { className: "content" },
                                    "Well-organised nerd with passion of ",
                                    c.a.createElement("span", { className: "highlight" }, " solving problems "),
                                    " having high attention to detail.",
                                    c.a.createElement("br", null),
                                    "A huge fan of ",
                                    c.a.createElement("span", { className: "highlight" }, "cricket "),
                                    ", PC games and TV shows",
                                ),
                                c.a.createElement(
                                    "div",
                                    { className: "content" },
                                    "Interested in working with me ?",
                                    c.a.createElement("br", null),
                                    c.a.createElement(
                                        g.b,
                                        { to: "/Contact" },
                                        c.a.createElement(
                                            "div",
                                            {
                                                className: "link",
                                                onClick: function () {
                                                    a(m.Contact);
                                                },
                                            },
                                            "Let's get in Touch",
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    )
                );
            }
            a(54);
            function b() {
                return c.a.createElement(
                    "svg",
                    {
                        version: "1.0",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "60.000000pt",
                        height: "72.000000pt",
                        viewBox: "0 0 53.000000 72.000000",
                        preserveAspectRatio: "xMidYMid meet",
                    },
                    c.a.createElement(
                        "g",
                        { transform: "translate(-9,72.000000) scale(0.100000,-0.100000)", fill: "var(--theme-blue)", stroke: "none" },
                        c.a.createElement("path", {
                            d: "M380 442 c0 -318 -1 -322 -71 -322 -61 0 -89 40 -89 126 l0 45 -67 -3 -68 -3 3 -69 c6 -158 87 -225 256 -214 80 5 134 38 165 100 20 42 21 59 21 331 l0 287 -75 0 -75 0 0 -278z",
                        }),
                    ),
                    c.a.createElement(
                        "g",
                        {
                            transform: "rotate(-180 28 35) translate(0.000000,72.000000) scale(1.100000,-1.100000) ",
                            fill: "var(--theme-red)",
                            stroke: "none",
                        },
                        c.a.createElement("path", { d: "M 32 72 L 22 70 L 21.5 8.4 L 0 8.4 L 0 0 L 52.5 0 L 52.5 8.4 L 31 8.4 L 31 70 Z" }),
                    ),
                );
            }
            var N = a(17),
                w = a(31),
                k = a.n(w);
            function y(e) {
                var t = e.selectedTab,
                    a = e.menuBtns,
                    i = e.setSelectedTab,
                    l = e.showingMobileMenu,
                    s = e.setShowingMobileMenu;
                return (
                    Object(n.useEffect)(function () {
                        for (var e = document.getElementsByClassName("menu-btn"), t = e.length - 1; t >= 0; t--) e[t].classList.add("animated");
                        for (var a = document.getElementsByClassName("menu-bar"), n = a.length - 1; n >= 0; n--) a[n].classList.remove("animated");
                        var c = setTimeout(function () {
                            for (var e = document.getElementsByClassName("animated"), t = e.length - 1; t >= 0; t--)
                                e[t].classList.remove("animated");
                        }, 1800);
                        return function () {
                            clearTimeout(c);
                        };
                    }, []),
                    Object(n.useEffect)(
                        function () {
                            var e = document.getElementsByClassName("menu-bar");
                            l ? e[0].classList.add("showing") : e[0].classList.remove("showing");
                        },
                        [l],
                    ),
                    c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                            "div",
                            { className: "menu-bar showing animated" },
                            c.a.createElement("div", { className: "menu-bg-color" }),
                            c.a.createElement("img", { className: "menu-bg", src: k.a, alt: "menu-bg" }),
                            c.a.createElement(
                                "div",
                                {
                                    className: "mobile-close-icon",
                                    onClick: function () {
                                        return s(!1);
                                    },
                                },
                                c.a.createElement(N.a, null),
                            ),
                            c.a.createElement(
                                g.b,
                                { to: "/" },
                                c.a.createElement(
                                    "div",
                                    {
                                        className: "text-svg animated",
                                        onClick: function () {
                                            i(-1), s(!1);
                                        },
                                    },
                                    c.a.createElement(b, null),
                                ),
                            ),
                            c.a.createElement(
                                "div",
                                { className: "menu-btns" },
                                a.map(function (e, a) {
                                    return c.a.createElement(
                                        g.b,
                                        { to: "/" + e, key: a },
                                        c.a.createElement(
                                            "div",
                                            {
                                                className: "menu-btn  btn" + a + (t === a ? " selected" : ""),
                                                onClick: function () {
                                                    i(a), s(!1);
                                                },
                                            },
                                            e,
                                        ),
                                    );
                                }),
                            ),
                        ),
                    )
                );
            }
            a(55);
            function S() {
                return (
                    Object(n.useEffect)(function () {
                        var e = document.getElementsByClassName("sea-animated");
                        e && e[0].classList.remove("sea-animated");
                    }, []),
                    c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                            "div",
                            { className: "sea sea-animated" },
                            c.a.createElement(
                                "div",
                                { className: "circle-wrapper" },
                                c.a.createElement("div", { className: "bubble" }),
                                c.a.createElement("div", { className: "bubble" }),
                                c.a.createElement(
                                    "div",
                                    { className: "submarine-wrapper" },
                                    c.a.createElement(
                                        "div",
                                        { className: "submarine-body" },
                                        c.a.createElement("div", { className: "window" }),
                                        c.a.createElement("div", { className: "engine" }),
                                        c.a.createElement("div", { className: "light" }),
                                    ),
                                    c.a.createElement("div", { className: "helix" }),
                                    c.a.createElement(
                                        "div",
                                        { className: "hat" },
                                        c.a.createElement(
                                            "div",
                                            { className: "leds-wrapper" },
                                            c.a.createElement("div", { className: "periscope" }),
                                            c.a.createElement("div", { className: "leds" }),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    )
                );
            }
            a(56);
            var x = a(25),
                T = a.n(x);
            function M(e) {
                var t = e.selectedTab,
                    a = function (e) {
                        e.classList.add("animate"),
                            setTimeout(function () {
                                e.classList.remove("animate");
                            }, 750);
                    },
                    i = Object(n.useCallback)(function () {
                        var e = document.getElementById("T"),
                            t = document.getElementById("E"),
                            n = document.getElementById("J"),
                            c = document.getElementById("A"),
                            i = document.getElementById("S");
                        return (
                            setTimeout(function () {
                                return a(e);
                            }, 1e3),
                            setTimeout(function () {
                                return a(t);
                            }, 1100),
                            setTimeout(function () {
                                return a(n);
                            }, 1200),
                            setTimeout(function () {
                                return a(c);
                            }, 1300),
                            setTimeout(function () {
                                return a(i);
                            }, 1400),
                            e.addEventListener("mouseover", function () {
                                return a(e);
                            }),
                            t.addEventListener("mouseover", function () {
                                return a(t);
                            }),
                            n.addEventListener("mouseover", function () {
                                return a(n);
                            }),
                            c.addEventListener("mouseover", function () {
                                return a(c);
                            }),
                            i.addEventListener("mouseover", function () {
                                return a(i);
                            }),
                            function () {
                                e.removeEventListener("mouseover", function () {
                                    return a(e);
                                }),
                                    t.removeEventListener("mouseover", function () {
                                        return a(t);
                                    }),
                                    n.removeEventListener("mouseover", function () {
                                        return a(n);
                                    }),
                                    c.removeEventListener("mouseover", function () {
                                        return a(c);
                                    }),
                                    i.removeEventListener("mouseover", function () {
                                        return a(i);
                                    });
                            }
                        );
                    }, []);
                return (
                    Object(n.useEffect)(
                        function () {
                            return (
                                t !== m.Welcome
                                    ? document.getElementById("welcome").classList.add("off")
                                    : document.getElementById("welcome").classList.remove("off"),
                                i()
                            );
                        },
                        [t, i],
                    ),
                    c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                            "div",
                            { id: "welcome", className: "main-view off" },
                            c.a.createElement(
                                "div",
                                { className: "content-container d-flex" },
                                c.a.createElement(
                                    "div",
                                    null,
                                    c.a.createElement(
                                        "div",
                                        { className: "welcome-content" },
                                        "Hi, ",
                                        c.a.createElement("br", null),
                                        "I'm",
                                        " ",
                                        c.a.createElement(
                                            "span",
                                            { className: "welcome-name waviy" },
                                            c.a.createElement("span", { className: "waviy-char", id: "T" }, "T"),
                                            c.a.createElement("span", { className: "waviy-char", id: "E" }, "E"),
                                            c.a.createElement("span", { className: "waviy-char", id: "J" }, "J"),
                                            c.a.createElement("span", { className: "waviy-char", id: "A" }, "A"),
                                            c.a.createElement("span", { className: "waviy-char", id: "S" }, "S"),
                                        ),
                                    ),
                                    c.a.createElement("hr", { style: { borderColor: "rgb(5 253 216 / 0.5)" } }),
                                    c.a.createElement("div", { className: "welcome-caption" }, "Software Developer"),
                                    c.a.createElement("hr", { style: { borderColor: "rgb(5 253 216 / 0.5)" } }),
                                ),
                                c.a.createElement("div", { className: "profile-pic" }, c.a.createElement("img", { src: T.a, alt: T.a })),
                            ),
                        ),
                    )
                );
            }
            a(57), a(58);
            var C = a(11);
            function L(e) {
                var t = e.selectedTab;
                return (
                    Object(n.useEffect)(
                        function () {
                            t !== m.Contact
                                ? document.getElementById("contact").classList.add("off")
                                : document.getElementById("contact").classList.remove("off");
                        },
                        [t],
                    ),
                    c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                            "div",
                            { id: "contact", className: "main-view off" },
                            c.a.createElement("div", { className: "header" }, "Contact"),
                            c.a.createElement(
                                "div",
                                { className: "content" },
                                "Have a question?",
                                c.a.createElement("br", null),
                                c.a.createElement("div", { className: "contact-caption" }, "Don't hesitate to Email me..."),
                            ),
                            c.a.createElement(
                                "div",
                                { className: "contact-container d-flex-col" },
                                c.a.createElement(
                                    "div",
                                    { className: "d-flex" },
                                    c.a.createElement("div", { className: "contact-label" }, "E-mail :"),
                                    c.a.createElement("div", { className: "contact-icon" }, c.a.createElement(C.b, null)),
                                    c.a.createElement(
                                        "div",
                                        { className: "contact-value" },
                                        c.a.createElement(
                                            "span",
                                            {
                                                className: "link",
                                                onClick: function () {
                                                    return window.location.assign("mailto:tjadhav95@gmail.com");
                                                },
                                            },
                                            "tjadhav95@gmail.com",
                                        ),
                                        " ",
                                        "/",
                                        " ",
                                        c.a.createElement(
                                            "span",
                                            {
                                                className: "link",
                                                style: { cursor: "pointer" },
                                                onClick: function () {
                                                    return window.location.assign("mailto:can.tejasj@gmail.com");
                                                },
                                            },
                                            "can.tejasj@gmail.com",
                                        ),
                                    ),
                                ),
                                c.a.createElement(
                                    "div",
                                    { className: "d-flex" },
                                    c.a.createElement("div", { className: "contact-label" }, "LinkedIn :"),
                                    c.a.createElement("div", { className: "contact-icon" }, c.a.createElement(C.e, null)),
                                    c.a.createElement(
                                        "div",
                                        { className: "contact-value" },
                                        c.a.createElement(
                                            "span",
                                            {
                                                className: "link",
                                                onClick: function () {
                                                    return window.open("https://www.linkedin.com/in/tejas-jadhav-765043110/");
                                                },
                                            },
                                            "tejas-jadhav-765043110",
                                        ),
                                    ),
                                ),
                                c.a.createElement(
                                    "div",
                                    { className: "d-flex" },
                                    c.a.createElement("div", { className: "contact-label" }, "Facebook :"),
                                    c.a.createElement("div", { className: "contact-icon" }, c.a.createElement(C.c, null)),
                                    c.a.createElement(
                                        "div",
                                        { className: "contact-value" },
                                        c.a.createElement(
                                            "span",
                                            {
                                                className: "link",
                                                onClick: function () {
                                                    return window.open("https://www.facebook.com/tejasjadhav95/");
                                                },
                                            },
                                            "tejasjadhav95",
                                        ),
                                    ),
                                ),
                                c.a.createElement(
                                    "div",
                                    { className: "d-flex" },
                                    c.a.createElement("div", { className: "contact-label" }, "GitHub :"),
                                    c.a.createElement("div", { className: "contact-icon" }, c.a.createElement(C.d, null)),
                                    c.a.createElement(
                                        "div",
                                        { className: "contact-value" },
                                        c.a.createElement(
                                            "span",
                                            {
                                                className: "link",
                                                onClick: function () {
                                                    return window.open("https://github.com/TeeeJaey");
                                                },
                                            },
                                            "TeeeJaey",
                                        ),
                                        " ",
                                        "/",
                                        " ",
                                        c.a.createElement(
                                            "span",
                                            {
                                                className: "link",
                                                onClick: function () {
                                                    return window.open("https://gist.github.com/TeeeJaey");
                                                },
                                            },
                                            "TeeeJaey-gists",
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    )
                );
            }
            a(59);
            function I() {
                return c.a.createElement(
                    "div",
                    { id: "bubbles" },
                    c.a.createElement("div", { className: "bubble x1" }),
                    c.a.createElement("div", { className: "bubble x2" }),
                    c.a.createElement("div", { className: "bubble x3" }),
                    c.a.createElement("div", { className: "bubble x4" }),
                    c.a.createElement("div", { className: "bubble x5" }),
                    c.a.createElement("div", { className: "bubble x6" }),
                );
            }
            a(60);
            var j = a(26),
                B = a.n(j),
                J = a(27),
                A = a.n(J);
            function O(e) {
                var t = e.selectedTab;
                return (
                    Object(n.useEffect)(
                        function () {
                            t !== m.Education
                                ? document.getElementById("education").classList.add("off")
                                : document.getElementById("education").classList.remove("off");
                        },
                        [t],
                    ),
                    c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                            "div",
                            { id: "education", className: "main-view off" },
                            c.a.createElement("div", { className: "header" }, "Education"),
                            c.a.createElement(
                                "div",
                                { className: "content-container" },
                                c.a.createElement(
                                    "div",
                                    { className: "d-flex edex-item" },
                                    c.a.createElement("div", { className: "edex-span" }, "Jun 2017 ", c.a.createElement("br", null), "- May 2019"),
                                    c.a.createElement(
                                        "div",
                                        { className: "edex-value" },
                                        c.a.createElement("div", { className: "edex-title" }, "Master of Technology - Computer Engineering"),
                                        c.a.createElement(
                                            "div",
                                            { className: "edex-company" },
                                            c.a.createElement(
                                                "span",
                                                {
                                                    className: "link",
                                                    onClick: function () {
                                                        return window.open("https://engineering.nmims.edu/");
                                                    },
                                                },
                                                "Narsee Monjee Institute of Management Studies",
                                            ),
                                        ),
                                        c.a.createElement(
                                            "ul",
                                            { className: "edex-content" },
                                            c.a.createElement(
                                                "li",
                                                null,
                                                "Passed out with a CGPA of ",
                                                c.a.createElement("span", { className: "highlight" }, "3.32"),
                                            ),
                                            c.a.createElement(
                                                "li",
                                                null,
                                                "Wrote & Published a Technical Research paper on",
                                                " ",
                                                c.a.createElement(
                                                    "span",
                                                    {
                                                        className: "link",
                                                        onClick: function () {
                                                            return window.open("https://www.irjet.net/archives/V6/i4/IRJET-V6I4130.pdf");
                                                        },
                                                    },
                                                    "Handwritten Signature Verification",
                                                ),
                                            ),
                                        ),
                                        c.a.createElement(
                                            "div",
                                            { className: "edex-image-mobile" },
                                            c.a.createElement("img", { src: B.a, alt: "mtechImg" }),
                                        ),
                                    ),
                                    c.a.createElement("div", { className: "edex-image" }, c.a.createElement("img", { src: B.a, alt: "mtechImg" })),
                                ),
                                c.a.createElement(
                                    "div",
                                    { className: "d-flex edex-item" },
                                    c.a.createElement("div", { className: "edex-span" }, "May 2013 ", c.a.createElement("br", null), "- Jun 2017"),
                                    c.a.createElement(
                                        "div",
                                        { className: "edex-value" },
                                        c.a.createElement("div", { className: "edex-title" }, "Bachelor of Technology - Computer Engineering"),
                                        c.a.createElement(
                                            "div",
                                            { className: "edex-company" },
                                            c.a.createElement(
                                                "span",
                                                {
                                                    className: "link",
                                                    onClick: function () {
                                                        return window.open("https://engineering.nmims.edu/");
                                                    },
                                                },
                                                "Narsee Monjee Institute of Management Studies",
                                            ),
                                        ),
                                        c.a.createElement(
                                            "ul",
                                            { className: "edex-content" },
                                            c.a.createElement(
                                                "li",
                                                null,
                                                "Passed out with a CGPA of ",
                                                c.a.createElement("span", { className: "highlight" }, "2.70"),
                                            ),
                                        ),
                                        c.a.createElement(
                                            "div",
                                            { className: "edex-image-mobile" },
                                            c.a.createElement("img", { src: A.a, alt: "btechImg" }),
                                        ),
                                    ),
                                    c.a.createElement("div", { className: "edex-image" }, c.a.createElement("img", { src: A.a, alt: "btechImg" })),
                                ),
                            ),
                        ),
                    )
                );
            }
            var F = a(6),
                P =
                    (a(61),
                    [
                        {
                            title: "Front-End",
                            items: [
                                { title: "React with hooks", points: 9 },
                                { title: "JavaScript / TS", points: 9 },
                                { title: "HTML-CSS", points: 9 },
                                { title: "Redux", points: 8 },
                                { title: "Angular", points: 8 },
                                { title: "VueJS", points: 7 },
                            ],
                        },
                        {
                            title: "Back-End",
                            items: [
                                { title: "NodeJS", points: 8 },
                                { title: "ExpressJS", points: 8 },
                                { title: "C#.Net", points: 7 },
                                { title: "Python", points: 7 },
                                { title: "Java", points: 5 },
                            ],
                        },
                        {
                            title: "Database",
                            items: [
                                { title: "MongoDB", points: 8 },
                                { title: "SQL Server", points: 8 },
                                { title: "MySQL", points: 7 },
                                { title: "Firebase / Firestore", points: 7 },
                            ],
                        },
                        {
                            title: "Language",
                            items: [
                                { title: "English", points: 9 },
                                { title: "Hindi", points: 9 },
                                { title: "Marathi", points: 9 },
                                { title: "Spanish", points: 5 },
                            ],
                        },
                    ]);
            a(62);
            function R(e) {
                var t = e.skill;
                return c.a.createElement(
                    "div",
                    { className: "skill-graph" },
                    t.title,
                    c.a.createElement(
                        "div",
                        { className: "graph-container" },
                        t.items.map(function (e, t) {
                            return c.a.createElement(
                                "div",
                                { key: t, className: "skill-item" },
                                c.a.createElement("span", { className: "title" }, e.title),
                                c.a.createElement(
                                    "span",
                                    { className: "skill-bar" },
                                    c.a.createElement("span", { className: "skill-bar-filled point-" + e.points }),
                                    c.a.createElement("span", { className: "skill-points" }, e.points),
                                ),
                            );
                        }),
                    ),
                );
            }
            function U(e) {
                var t = e.selectedTab;
                return (
                    Object(n.useEffect)(
                        function () {
                            var e = document.getElementsByClassName("skill-bar-filled");
                            if (t !== m.Skills) {
                                document.getElementById("skills").classList.add("off");
                                var a,
                                    n = Object(F.a)(e);
                                try {
                                    for (n.s(); !(a = n.n()).done; ) {
                                        a.value.classList.add("width-0");
                                    }
                                } catch (c) {
                                    n.e(c);
                                } finally {
                                    n.f();
                                }
                            } else
                                document.getElementById("skills").classList.remove("off"),
                                    setTimeout(function () {
                                        var t,
                                            a = Object(F.a)(e);
                                        try {
                                            for (a.s(); !(t = a.n()).done; ) {
                                                t.value.classList.remove("width-0");
                                            }
                                        } catch (c) {
                                            a.e(c);
                                        } finally {
                                            a.f();
                                        }
                                    }, 800);
                        },
                        [t],
                    ),
                    c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                            "div",
                            { id: "skills", className: "main-view off" },
                            c.a.createElement("div", { className: "header" }, "Skills"),
                            c.a.createElement(
                                "div",
                                { className: "content-container" },
                                P.map(function (e, t) {
                                    return c.a.createElement(R, { key: t, skill: e });
                                }),
                            ),
                        ),
                    )
                );
            }
            a(63);
            var W = a(32),
                H = a.n(W),
                D = a(33),
                V = a.n(D),
                G = a(34),
                Y = a.n(G),
                Q = a(35),
                q = a.n(Q),
                z = a(36),
                K = a.n(z),
                Z = a(37),
                X = a.n(Z),
                $ = a(38),
                _ = a.n($),
                ee = a(39),
                te = a.n(ee),
                ae = a(40),
                ne = a.n(ae),
                ce = a(41),
                ie = a.n(ce),
                le = a(42),
                se = a.n(le),
                re = a(43),
                me = a.n(re),
                oe = {
                    MovieTrailers: {
                        id: "MovieTrailers",
                        image: H.a,
                        title: "Movie Trailers",
                        time: "Oct 2021",
                        techstack: ["React-hooks", "Redux", "JavaScript", "HTML-CSS", "Lazy-Loading"],
                        description: [
                            "A Movie trailers application to watch trailers of different movies, each having genres, languages etc.",
                            "Responsive enough to be viewed on any device. (desktop to mobile)",
                        ],
                        codeUrl: "https://github.com/TeeeJaey/Movie-Trailers-React",
                        liveUrl: "https://teeejaey.github.io/Movie-Trailers-React/",
                    },
                    BoardGames: {
                        id: "BoardGames",
                        image: V.a,
                        title: "Board Games",
                        time: "Aug 2020 - Ongoing",
                        techstack: ["JavaScript", "Vue-JS", "HTML-CSS"],
                        description: [
                            "Set of Board games made in HTML / JavaScript",
                            "Include games like Business, Wordle, Ludo, Tetris, 2048, etc.",
                        ],
                        codeUrl: "https://github.com/TeeeJaey/BoardGames",
                        liveUrl: "https://teeejaey.github.io/BoardGames",
                    },
                    MernPos: {
                        id: "MernPos",
                        image: Y.a,
                        title: "MernPos",
                        time: "Jan 2021 - Mar 2021",
                        techstack: ["NodeJS", "MongoDB", "ExpressJS", "React", "JavaScript", "HTML-CSS"],
                        description: [
                            "A Mern Stack Point of SALE application",
                            "Enables user to signin to the app, add commodities, perform payment and complete transaction",
                            "Also creates a pdf receipt in the end of each transaction",
                        ],
                        codeUrl: "https://github.com/TeeeJaey/MernPos",
                    },
                    ChatBot: {
                        id: "ChatBot",
                        image: q.a,
                        title: "ChatBot",
                        time: "Dec 2021",
                        techstack: ["React", "TypeScript", "HTML-CSS"],
                        description: [
                            "A simple non-AI chatting assistant written in React",
                            "Ask questions like - 'who r u?, 'who made u?', 'who is batman?' ,'i am hungry'",
                            "Best viewed on a phone",
                        ],
                        codeUrl: "https://github.com/TeeeJaey/ChatBot",
                        liveUrl: "https://teeejaey.github.io/ChatBot",
                    },
                    Meditation: {
                        id: "Meditation",
                        image: ne.a,
                        title: "Meditation App",
                        time: "Sep 2021",
                        techstack: ["React-hooks", "Firebase-FireStore DB", "HTML-CSS"],
                        description: [
                            "A Meditation App where two users (trainer and seeker) can simultaneously undergo a meditation period",
                            "There is no meditation in reality",
                            "Seeker will request and trainer will accept and then the timer starts",
                        ],
                        codeUrl: "https://github.com/TeeeJaey/Meditation-App",
                    },
                    SendMyCell: {
                        id: "SendMyCell",
                        image: X.a,
                        title: "Send My Cell",
                        time: "Jan 2019 - Feb 2019",
                        techstack: ["PHP", "HTML-CSS", "JavaScript", "MySQL"],
                        description: [
                            "SendMyCell is a project on E-Commerce Website & database designing.",
                            "It is an online store for mobiles",
                            "There is a dashboard page, registration page, product page and also cart page",
                        ],
                        codeUrl: "https://github.com/TeeeJaey/SendMyCell",
                    },
                    SignatureVerifier: {
                        id: "SignatureVerifierImg",
                        image: _.a,
                        title: "Signature Verifier",
                        time: "Jan 2019 - May 2019",
                        techstack: ["Python", "OpenCV", "MySQL"],
                        description: [
                            "Handwritten Signature Verification & writer Identification using Image Processing",
                            "It uses LBP to extract features and train the system",
                            "It uses KNN to classify the test images",
                        ],
                        codeUrl: "https://github.com/TeeeJaey/SignatureVerifier",
                    },
                    RaceIt: {
                        id: "RaceIt",
                        image: te.a,
                        title: "Race It",
                        time: "Jan 2017 - April 2017",
                        techstack: ["Unity 3D", "C#"],
                        description: [
                            "A car racing game designed on Unity 3D engine",
                            "Allows player to race with his/her car against few other cars",
                        ],
                        codeUrl: "https://github.com/TeeeJaey/RaceIt-1.0",
                    },
                    PortFolio: {
                        id: "PortFolio",
                        image: me.a,
                        title: "Portfolio",
                        time: "Feb 2018",
                        techstack: ["React", "Javascript", "HTML-CSS"],
                        description: ["My portfolio App written in React", "Can be viewed in desktop or mobiles"],
                        codeUrl: "https://github.com/TeeeJaey/PortFolio",
                        liveUrl: "https://teeejaey.github.io",
                    },
                    SnakeLadder: {
                        id: "SnakeLadder",
                        image: ie.a,
                        title: "Snake & Ladder",
                        time: "Oct 2018",
                        techstack: ["Android", "Java"],
                        description: ["Android app developed on Android studio", "Snakes and Ladders, a very famous board game form the 70s"],
                        codeUrl: "https://github.com/TeeeJaey/Snakes-Ladder",
                    },
                    MyWay: {
                        id: "MyWay",
                        image: K.a,
                        title: "MyWay",
                        time: "Feb 2018",
                        techstack: ["HTML-CSS", "JavaScript"],
                        description: ["Tried to copy a bootstrap tempelate that I found online."],
                        codeUrl: "https://github.com/TeeeJaey/MYWAY",
                        liveUrl: "https://teeejaey.github.io/Projects/MyWay/MYWAY.html",
                    },
                    MobileMail: {
                        id: "MobileMail",
                        image: se.a,
                        title: "Mobile Mail",
                        time: "Feb 2018",
                        techstack: ["HTML-CSS"],
                        description: ["A mobile mail page UI"],
                        codeUrl: "https://gist.github.com/TeeeJaey/7c448bc5f0c990d9144a59f6b37b452f",
                        liveUrl: "https://teeejaey.github.io/Projects/mobile.html",
                    },
                };
            a(64);
            function de(e) {
                var t = e.image,
                    a = e.name,
                    n = e.workItemClicked;
                return c.a.createElement(
                    "li",
                    null,
                    c.a.createElement(
                        g.b,
                        { to: a },
                        c.a.createElement(
                            "div",
                            {
                                className: "work-item",
                                onClick: function () {
                                    return n(a);
                                },
                            },
                            c.a.createElement("img", { src: t, alt: a }),
                            c.a.createElement("div", { className: "work-item-overlay" }),
                        ),
                    ),
                );
            }
            var ue = a(44);
            a(65);
            function Ee(e) {
                var t = e.data,
                    a = e.onClose;
                return c.a.createElement(
                    "div",
                    { className: "work-data" },
                    c.a.createElement(
                        "div",
                        { className: "work-data-container" },
                        c.a.createElement(
                            g.b,
                            { to: "/Work" },
                            c.a.createElement(N.a, {
                                className: "word-data-close-btn",
                                onClick: function () {
                                    return a();
                                },
                            }),
                        ),
                        c.a.createElement("img", { src: t.image, alt: t.id }),
                        c.a.createElement(
                            "div",
                            { className: "work-data-right" },
                            c.a.createElement(
                                "div",
                                { className: "d-flex" },
                                c.a.createElement("div", { className: "title" }, t.title),
                                c.a.createElement("div", { className: "timespan" }, t.time),
                            ),
                            c.a.createElement(
                                "div",
                                { className: "techstack" },
                                t.techstack.map(function (e, t) {
                                    return c.a.createElement("span", { key: t, className: "techstack-item" }, e);
                                }),
                            ),
                            c.a.createElement(
                                "div",
                                { className: "work-btns" },
                                t.liveUrl &&
                                    c.a.createElement(
                                        "div",
                                        {
                                            className: "work-btn",
                                            onClick: function () {
                                                return window.open(t.liveUrl);
                                            },
                                        },
                                        "Run Live ",
                                        c.a.createElement(N.b, { className: "work-btn-icon" }),
                                    ),
                                t.codeUrl &&
                                    c.a.createElement(
                                        "div",
                                        {
                                            className: "work-btn",
                                            onClick: function () {
                                                return window.open(t.codeUrl);
                                            },
                                        },
                                        "View Code ",
                                        c.a.createElement(ue.a, { className: "work-btn-icon" }),
                                    ),
                            ),
                        ),
                        c.a.createElement(
                            "div",
                            { className: "work-data-bottom" },
                            c.a.createElement("h4", null, "Description"),
                            c.a.createElement(
                                "ul",
                                { className: "work-data-desc" },
                                t.description.map(function (e, t) {
                                    return c.a.createElement("li", { key: t }, e);
                                }),
                            ),
                        ),
                    ),
                );
            }
            function pe(e) {
                e.match;
                var t = e.selectedTab,
                    a = e.setSelectedTab,
                    i = Object(r.l)(),
                    l = Object(n.useState)(null),
                    o = Object(s.a)(l, 2),
                    d = o[0],
                    u = o[1];
                return (
                    Object(n.useEffect)(
                        function () {
                            if (t !== m.Work) document.getElementById("work").classList.add("off");
                            else {
                                document.getElementById("work").classList.remove("off");
                                var e = i.pathname.split("/")[2];
                                e &&
                                    setTimeout(function () {
                                        return u(e);
                                    }, 2e3);
                            }
                        },
                        [t],
                    ),
                    c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                            r.c,
                            null,
                            c.a.createElement(r.a, {
                                path: d,
                                element: c.a.createElement(Ee, {
                                    onClose: function () {
                                        return u(null);
                                    },
                                    data: oe[d],
                                }),
                            }),
                        ),
                        c.a.createElement(
                            "div",
                            { id: "work", className: "main-view off" },
                            c.a.createElement("div", { className: "header" }, "Work"),
                            c.a.createElement(
                                "div",
                                { className: "text" },
                                "I have made some really cool ",
                                c.a.createElement("span", { className: "highlight" }, "personal projects"),
                                c.a.createElement("br", null),
                                "Checkout my",
                                c.a.createElement(
                                    "span",
                                    {
                                        className: "link",
                                        onClick: function () {
                                            a(6);
                                        },
                                    },
                                    " github page ",
                                ),
                                "for more",
                            ),
                            c.a.createElement(
                                "div",
                                { className: "work-list" },
                                c.a.createElement(
                                    "ul",
                                    null,
                                    Object.keys(oe).map(function (e, t) {
                                        return c.a.createElement(de, {
                                            key: t,
                                            workItemClicked: function (e) {
                                                return u(e);
                                            },
                                            image: oe[e].image,
                                            name: e,
                                        });
                                    }),
                                ),
                            ),
                        ),
                    )
                );
            }
            a(66);
            function ve(e) {
                var t = e.selectedTab;
                return (
                    Object(n.useEffect)(
                        function () {
                            t !== m.Interests
                                ? document.getElementById("interests").classList.add("off")
                                : document.getElementById("interests").classList.remove("off");
                        },
                        [t],
                    ),
                    c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                            "div",
                            { id: "interests", className: "main-view off" },
                            c.a.createElement("div", { className: "header" }, "Interests"),
                            c.a.createElement("div", { className: "content-container" }, " COMING SOON "),
                        ),
                    )
                );
            }
            function fe() {
                var e = Object(r.l)(),
                    t = Object(n.useState)(-2),
                    a = Object(s.a)(t, 2),
                    i = a[0],
                    l = a[1],
                    d = Object(n.useState)(!1),
                    u = Object(s.a)(d, 2),
                    E = u[0],
                    p = u[1];
                return (
                    Object(n.useEffect)(function () {
                        var t = e.pathname.split("/")[1];
                        t
                            ? setTimeout(function () {
                                  return l(o.indexOf(t));
                              }, 500)
                            : setTimeout(function () {
                                  return l(m.Welcome);
                              }, 500);
                    }, []),
                    c.a.createElement(
                        "div",
                        { style: { display: "flex" } },
                        c.a.createElement(
                            "div",
                            {
                                className: "mobile-menu-btn",
                                onClick: function () {
                                    return p(!0);
                                },
                            },
                            c.a.createElement(C.a, null),
                        ),
                        c.a.createElement(I, null),
                        c.a.createElement(y, {
                            showingMobileMenu: E,
                            setShowingMobileMenu: function (e) {
                                return p(e);
                            },
                            selectedTab: i,
                            menuBtns: o,
                            setSelectedTab: function (e) {
                                return l(e);
                            },
                        }),
                        c.a.createElement(S, null),
                        c.a.createElement(
                            r.c,
                            null,
                            c.a.createElement(r.a, { path: "/", element: c.a.createElement(M, { selectedTab: i }) }),
                            c.a.createElement(r.a, {
                                path: "/" + o[0],
                                element: c.a.createElement(h, {
                                    selectedTab: i,
                                    setSelectedTab: function (e) {
                                        return l(e);
                                    },
                                }),
                            }),
                            c.a.createElement(r.a, { path: "/" + o[1], element: c.a.createElement(f, { selectedTab: i }) }),
                            c.a.createElement(r.a, { path: "/" + o[2], element: c.a.createElement(U, { selectedTab: i }) }),
                            c.a.createElement(r.a, { path: "/" + o[3], element: c.a.createElement(O, { selectedTab: i }) }),
                            c.a.createElement(r.a, {
                                path: "/" + o[4] + "/*",
                                element: c.a.createElement(pe, {
                                    selectedTab: i,
                                    setSelectedTab: function (e) {
                                        return l(e);
                                    },
                                }),
                            }),
                            c.a.createElement(r.a, { path: "/" + o[5], element: c.a.createElement(L, { selectedTab: i }) }),
                            c.a.createElement(r.a, { path: "/" + o[6], element: c.a.createElement(ve, { selectedTab: i }) }),
                        ),
                    )
                );
            }
            l.a.render(
                c.a.createElement(c.a.StrictMode, null, c.a.createElement(g.a, null, c.a.createElement(fe, null))),
                document.getElementById("root"),
            );
        },
    ]),
    [[45, 1, 2]],
]);
//# sourceMappingURL=main.046f3e88.chunk.js.map
