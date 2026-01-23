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
    }

    // [GET] /courses/create
    create(req, res) {
        res.render("courses/create");
    }

    // [POST] /courses/store
    async store(req, res, next) {
        try {
            const payload = req.body;
            await Course.create(payload);
            res.redirect("/courses");
        } catch (error) {
            res.send("Tạo thất bại!!!");
            next(error);
        }
    }
}

export default new CoursesController();
