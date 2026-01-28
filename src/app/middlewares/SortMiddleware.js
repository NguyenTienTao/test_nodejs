function SortMiddleware(req, res, next) {
    const { type, column } = req.query;
    res.locals._sort = {
        enabled: false,
        type: "default"
    }

    if (Object.hasOwn(req.query, "_sort")) {
        Object.assign(res.locals._sort, {
            enabled: true,
            type: type,
            column: column
        })
    }

    next();
}

export default SortMiddleware