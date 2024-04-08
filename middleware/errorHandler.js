const errorHandler = (err, req, res, next) => {
    console.log('first')
    const statusCode = res.statusCode ? res.statusCode : 500
    res.json({ title: "Not found", message: err.meassage, stackTrace: err.stack })
}

module.exports = errorHandler