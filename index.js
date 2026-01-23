import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";

import route from "./src/routes/routes.js";
import { connect } from "./src/config/db/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Connect DB
connect();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "src/assets")));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "src/views"));

// Route
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
