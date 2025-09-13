"use strict";
(self.webpackChunkportfolio_app = self.webpackChunkportfolio_app || []).push([
    [620],
    {
        577: () => {},
        925: (e, s, a) => {
            a.d(s, { J: () => h, $: () => o });
            a(43), a(577);
            const n = a.p + "static/media/here.3ce5429c97152e8c29c9.jpg",
                i = a.p + "static/media/DN.eb151e963b137b81e502.jpg",
                c = a.p + "static/media/jpmc.b8f2f951f384aecb7485.png";
            var t = a(579);
            const l = [
                {
                    id: "JPMC",
                    title: "Software Engineer",
                    company: (0, t.jsx)("span", {
                        className: "link",
                        onClick: () => window.open("https://www.jpmorganchase.com/"),
                        children: "JP Morgan Chase & Co.",
                    }),
                    image: c,
                    techstack: ["React", "Redux", "TypeScript", "Playwright", "NestJS", "Ag-grid"],
                    time: (0, t.jsxs)(t.Fragment, { children: ["Since ", (0, t.jsx)("br", {}), " Apr 2024"] }),
                    projects: [
                        {
                            project: (0, t.jsx)("span", {
                                className: "link",
                                onClick: () => window.open("https://jpmorgan.com/markets/execute"),
                                children: "Execute SPG",
                            }),
                            content: [],
                        },
                    ],
                },
                {
                    id: "HERE",
                    title: "Software Engineer",
                    company: (0, t.jsx)("span", {
                        className: "link",
                        onClick: () => window.open("https://www.here.com/"),
                        children: "HERE Technologies",
                    }),
                    image: n,
                    techstack: ["React", "Redux", "NestJS", "TypeScript", "NodeJS", "Angular", "ThreeJS"],
                    time: (0, t.jsxs)(t.Fragment, { children: ["Jan 2022 ", (0, t.jsx)("br", {}), "- Mar 2023"] }),
                    projects: [
                        {
                            project: (0, t.jsx)("span", {
                                className: "link",
                                onClick: () => window.open("https://here.com/platform/hd-live-map"),
                                children: "HD Live Map Viewer",
                            }),
                            content: [],
                        },
                        {
                            project: (0, t.jsx)("span", {
                                className: "link",
                                onClick: () => window.open("https://wego.here.com"),
                                children: "Here We Go web",
                            }),
                            content: [],
                        },
                    ],
                },
                {
                    id: "DN",
                    title: "Software Engineer",
                    company: (0, t.jsx)("span", {
                        className: "link",
                        onClick: () => window.open("https://www.dieboldnixdorf.com/"),
                        children: "Diebold Nixdorf",
                    }),
                    image: i,
                    techstack: ["Angular", "React", "React-Native", "C#.Net", "SQL", "Python"],
                    time: (0, t.jsxs)(t.Fragment, { children: ["Jul 2018 ", (0, t.jsx)("br", {}), "- Dec 2021"] }),
                    projects: [
                        {
                            project: (0, t.jsx)("span", {
                                className: "link",
                                onClick: () => window.open("https://dieboldnixdorf.com/retail/portfolio/software"),
                                children: "Vynamic POS & Self-Checkout",
                            }),
                            content: [],
                        },
                    ],
                },
            ];
            var r = a(148);
            function o() {
                const e = new Date("2018-07-18"),
                    s = new Date(),
                    a = s.getMonth() - e.getMonth() + 12 * (s.getFullYear() - e.getFullYear());
                return { years: Math.floor(a / 12), months: a % 12 };
            }
            function d() {
                const { years: e, months: s } = o();
                return e + " years, " + s + " months";
            }
            function h(e) {
                let { selectedTab: s } = e;
                const a = (0, r.MI)(s, r.j$.Experience);
                return (0, t.jsxs)("div", {
                    id: a,
                    className: "main-view off",
                    children: [
                        (0, t.jsx)("div", { className: "header", children: "Experience" }),
                        (0, t.jsx)("div", { className: "total-exp", children: d() }),
                        (0, t.jsx)("div", {
                            className: "content-container",
                            children: l.map(e =>
                                (0, t.jsxs)("div", {
                                    className: "d-flex edex-item",
                                    children: [
                                        (0, t.jsx)("div", { className: "edex-span", children: e.time }),
                                        (0, t.jsxs)("div", {
                                            className: "edex-value",
                                            children: [
                                                (0, t.jsx)("div", { className: "edex-title", children: e.title }),
                                                (0, t.jsx)("div", { className: "edex-company", children: e.company }),
                                                (0, t.jsx)("div", {
                                                    className: "edex-techstack",
                                                    children: e.techstack.map(e =>
                                                        (0, t.jsx)("span", {
                                                            className: "techstack-item",
                                                            children: e,
                                                        }),
                                                    ),
                                                }),
                                                e.projects.map(e =>
                                                    (0, t.jsxs)("div", {
                                                        className: "edex-project",
                                                        children: [
                                                            (0, t.jsxs)("div", {
                                                                className: "edex-projectname",
                                                                children: ["Project: ", e.project, " "],
                                                            }),
                                                            (0, t.jsx)("ul", {
                                                                className: "edex-content",
                                                                children:
                                                                    null === e || void 0 === e
                                                                        ? void 0
                                                                        : e.content.map(e =>
                                                                              (0, t.jsx)("li", { children: e }),
                                                                          ),
                                                            }),
                                                        ],
                                                    }),
                                                ),
                                                (0, t.jsx)("div", {
                                                    className: "edex-image-mobile",
                                                    children: (0, t.jsx)("img", { src: e.image, alt: e.id + "Image" }),
                                                }),
                                            ],
                                        }),
                                        (0, t.jsx)("div", {
                                            className: "edex-image",
                                            children: (0, t.jsx)("img", { src: e.image, alt: e.id + "Image" }),
                                        }),
                                    ],
                                }),
                            ),
                        }),
                    ],
                });
            }
        },
        960: (e, s, a) => {
            a.r(s), a.d(s, { default: () => l });
            a(43);
            var n = a(925),
                i = a(923),
                c = a(148),
                t = a(579);
            const l = function (e) {
                let { selectedTab: s, setSelectedTab: a } = e;
                const l = (0, c.MI)(s, c.j$.About);
                return (0, t.jsxs)("div", {
                    id: l,
                    className: "main-view off",
                    children: [
                        (0, t.jsx)("div", { className: "header", children: "About" }),
                        (0, t.jsxs)("div", {
                            className: "content-container",
                            children: [
                                (0, t.jsxs)("div", {
                                    className: "content",
                                    children: [
                                        "Hi, I am ",
                                        (0, t.jsx)("span", { className: "highlight name", children: "Tejas" }),
                                        ". You can call me Tehsu (\u30c6\u30cf\u30b9)",
                                    ],
                                }),
                                (0, t.jsxs)("div", {
                                    className: "content",
                                    children: [
                                        "A ",
                                        (0, t.jsx)("span", {
                                            className: "highlight",
                                            children: "JavaScript Developer",
                                        }),
                                        " with over",
                                        (0, t.jsxs)("span", {
                                            className: "highlight",
                                            children: [" ", (0, n.$)().years, " years of experience"],
                                        }),
                                        ".",
                                        (0, t.jsx)("br", {}),
                                        "I have a ",
                                        (0, t.jsx)("span", { className: "highlight", children: "Master's degree" }),
                                        " in I am working at",
                                        (0, t.jsx)("span", { className: "highlight", children: " JP Morgan Chase" }),
                                        ".",
                                    ],
                                }),
                                (0, t.jsxs)("div", {
                                    className: "content",
                                    children: [
                                        "Well-organised nerd with passion of ",
                                        (0, t.jsx)("span", { className: "highlight", children: " solving problems " }),
                                        " having high attention to detail.",
                                    ],
                                }),
                                (0, t.jsxs)("div", {
                                    className: "content",
                                    children: [
                                        "I enjoy building websites and applications using the ",
                                        (0, t.jsx)("span", { className: "highlight", children: "MERN stack" }),
                                        " ",
                                        "with a focus in frontend.",
                                    ],
                                }),
                                (0, t.jsxs)("div", {
                                    className: "content",
                                    children: [
                                        "Interested in working with me ?",
                                        (0, t.jsx)("br", {}),
                                        (0, t.jsx)(i.N_, {
                                            to: "/Contact",
                                            children: (0, t.jsx)("div", {
                                                className: "link",
                                                onClick: () => a(c.j$.Contact),
                                                children: "Let's get in Touch",
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
        },
    },
]);
