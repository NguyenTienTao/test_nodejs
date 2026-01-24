import newsRouter from "./news.js";
import siteRouter from "./site.js";
import coursesRouter from "./courses.js";
import meRouter from "./me.js";

function route(app) {
    //me
    app.use("/me", meRouter);

    // news
    app.use("/news", newsRouter);

    // courses
    app.use("/courses", coursesRouter);

    // sites
    app.use("/", siteRouter);
}

export default route;
