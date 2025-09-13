"use strict";
(self.webpackChunkportfolio_app = self.webpackChunkportfolio_app || []).push([
    [983],
    {
        91: (e, s, c) => {
            c.r(s), c.d(s, { default: () => a });
            const a = c(925).J;
        },
        577: () => {},
        925: (e, s, c) => {
            c.d(s, { J: () => m, $: () => r });
            c(43), c(577);
            const a = c.p + "static/media/here.3ce5429c97152e8c29c9.jpg",
                n = c.p + "static/media/DN.eb151e963b137b81e502.jpg",
                t = c.p + "static/media/jpmc.b8f2f951f384aecb7485.png";
            var i = c(579);
            const o = [
                {
                    id: "JPMC",
                    title: "Software Engineer",
                    company: (0, i.jsx)("span", {
                        className: "link",
                        onClick: () => window.open("https://www.jpmorganchase.com/"),
                        children: "JP Morgan Chase & Co.",
                    }),
                    image: t,
                    techstack: ["React", "Redux", "TypeScript", "Playwright", "NestJS", "Ag-grid"],
                    time: (0, i.jsxs)(i.Fragment, { children: ["Since ", (0, i.jsx)("br", {}), " Apr 2024"] }),
                    projects: [
                        {
                            project: (0, i.jsx)("span", {
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
                    company: (0, i.jsx)("span", {
                        className: "link",
                        onClick: () => window.open("https://www.here.com/"),
                        children: "HERE Technologies",
                    }),
                    image: a,
                    techstack: ["React", "Redux", "NestJS", "TypeScript", "NodeJS", "Angular", "ThreeJS"],
                    time: (0, i.jsxs)(i.Fragment, { children: ["Jan 2022 ", (0, i.jsx)("br", {}), "- Mar 2023"] }),
                    projects: [
                        {
                            project: (0, i.jsx)("span", {
                                className: "link",
                                onClick: () => window.open("https://here.com/platform/hd-live-map"),
                                children: "HD Live Map Viewer",
                            }),
                            content: [],
                        },
                        {
                            project: (0, i.jsx)("span", {
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
                    company: (0, i.jsx)("span", {
                        className: "link",
                        onClick: () => window.open("https://www.dieboldnixdorf.com/"),
                        children: "Diebold Nixdorf",
                    }),
                    image: n,
                    techstack: ["Angular", "React", "React-Native", "C#.Net", "SQL", "Python"],
                    time: (0, i.jsxs)(i.Fragment, { children: ["Jul 2018 ", (0, i.jsx)("br", {}), "- Dec 2021"] }),
                    projects: [
                        {
                            project: (0, i.jsx)("span", {
                                className: "link",
                                onClick: () => window.open("https://dieboldnixdorf.com/retail/portfolio/software"),
                                children: "Vynamic POS & Self-Checkout",
                            }),
                            content: [],
                        },
                    ],
                },
            ];
            var l = c(148);
            function r() {
                const e = new Date("2018-07-18"),
                    s = new Date(),
                    c = s.getMonth() - e.getMonth() + 12 * (s.getFullYear() - e.getFullYear());
                return { years: Math.floor(c / 12), months: c % 12 };
            }
            function d() {
                const { years: e, months: s } = r();
                return e + " years, " + s + " months";
            }
            function m(e) {
                let { selectedTab: s } = e;
                const c = (0, l.MI)(s, l.j$.Experience);
                return (0, i.jsxs)("div", {
                    id: c,
                    className: "main-view off",
                    children: [
                        (0, i.jsx)("div", { className: "header", children: "Experience" }),
                        (0, i.jsx)("div", { className: "total-exp", children: d() }),
                        (0, i.jsx)("div", {
                            className: "content-container",
                            children: o.map(e =>
                                (0, i.jsxs)("div", {
                                    className: "d-flex edex-item",
                                    children: [
                                        (0, i.jsx)("div", { className: "edex-span", children: e.time }),
                                        (0, i.jsxs)("div", {
                                            className: "edex-value",
                                            children: [
                                                (0, i.jsx)("div", { className: "edex-title", children: e.title }),
                                                (0, i.jsx)("div", { className: "edex-company", children: e.company }),
                                                (0, i.jsx)("div", {
                                                    className: "edex-techstack",
                                                    children: e.techstack.map(e =>
                                                        (0, i.jsx)("span", {
                                                            className: "techstack-item",
                                                            children: e,
                                                        }),
                                                    ),
                                                }),
                                                e.projects.map(e =>
                                                    (0, i.jsxs)("div", {
                                                        className: "edex-project",
                                                        children: [
                                                            (0, i.jsxs)("div", {
                                                                className: "edex-projectname",
                                                                children: ["Project: ", e.project, " "],
                                                            }),
                                                            (0, i.jsx)("ul", {
                                                                className: "edex-content",
                                                                children:
                                                                    null === e || void 0 === e
                                                                        ? void 0
                                                                        : e.content.map(e =>
                                                                              (0, i.jsx)("li", { children: e }),
                                                                          ),
                                                            }),
                                                        ],
                                                    }),
                                                ),
                                                (0, i.jsx)("div", {
                                                    className: "edex-image-mobile",
                                                    children: (0, i.jsx)("img", { src: e.image, alt: e.id + "Image" }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)("div", {
                                            className: "edex-image",
                                            children: (0, i.jsx)("img", { src: e.image, alt: e.id + "Image" }),
                                        }),
                                    ],
                                }),
                            ),
                        }),
                    ],
                });
            }
        },
    },
]);
//# sourceMappingURL=983.63979b1d.chunk.js.map
