import Course from "../models/Course.js";

class MeController {
    // [GET] /me/stored-courses
    async index(req, res, next) {
        try {
            const courses = await Course.find({}).lean();

            if (courses.length) {
                res.render("me/stored-courses", { courses });
            } else {
                res.json({ message: "Empty!!!" });
            }
        } catch (error) {
            next(error);
        }
    }
}

export default new MeController();
