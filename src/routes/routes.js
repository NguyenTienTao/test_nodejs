import newsRouter from "./news.js";
import siteRouter from "./site.js";

function route(app) {
    // news
    app.use("/news", newsRouter);

    // sites
    app.use("/", siteRouter);
}

export default route;
