import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";

import SortMiddleware from "./src/app/middlewares/SortMiddleware.js";
import route from "./src/routes/routes.js";
import { connect } from "./src/config/db/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Connect DB
connect();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "src/assets")));

// Custom middleware
app.use(SortMiddleware);

app.engine(
    ".hbs",
    engine({
        extname: ".hbs",
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : "default";
                const icons = {
                    default: "fa-solid fa-sort",
                    desc: "fa-solid fa-arrow-down-wide-short",
                    asc: "fa-solid fa-arrow-down-short-wide"
                };
                const types = {
                    default: "desc",
                    desc: "asc",
                    asc: "desc"
                }

                const icon = icons[sortType];
                const type = types[sortType];

                return `<a href="?_sort&column=${field}&type=${type}"><i class="${icon}"></i></a>`    
            }
        }
    }),
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "src/views"));

// Route
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
