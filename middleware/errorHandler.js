const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.json({title: "Not found", message: err.meassage, stackTrace: err.stack })
}

module.exports = errorHandler