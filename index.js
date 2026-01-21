import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";

import route from "./src/routes/routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "src/assets")));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "src/views"));

// Route
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
