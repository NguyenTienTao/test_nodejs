import Course from "../models/Course.js";

class CoursesController {
    // [GET] /courses
    async index(req, res, next) {
        try {
            const courses = await Course.find({}).lean();

            if (courses.length) {
                res.render("courses/courses", { courses });
            } else {
                res.json({ message: "Empty!!!" });
            }
        } catch (error) {
            next(error);
        }
    }

    // [GET] /courses/:slug
    async show(req, res, next) {
        try {
            const { slug } = req.params;
            const course = await Course.findOne({ slug }).lean();

            res.render("courses/course-detail", { course });
        } catch (error) {
            next(error);
        }
        // res.send("Biết bố mày là ai không?");
    }
}

export default new CoursesController();
