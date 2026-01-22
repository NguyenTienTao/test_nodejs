import newsRouter from "./news.js";
import siteRouter from "./site.js";
import coursesRouter from "./courses.js";

function route(app) {
    // news
    app.use("/news", newsRouter);

    // courses
    app.use("/courses", coursesRouter);

    // sites
    app.use("/", siteRouter);
}

export default route;
