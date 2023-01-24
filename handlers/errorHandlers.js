
/* Catch Error*/

exports.catchErrors = (fn) => {
    return function (req, res, next) {
        fn(req, res, next).catch((error) => {
         if(typeof error === "string"){
            res.status(400).json({
                message: err,
            });
         } else{
            next(err);
         }
        })
    }
}
/* Internal Server Error*/
exports.developmentErrors = (err, res) => {

    err.stack = err.stack || "";
    const errorDetails = {
        message: err.message,
        status: err.status,
        stack: err.stack,
    };
    res.status(err.status || 500).json({
        errorDetails
    })
}

/* Internal Server Error*/
exports.internalServerError = (err, res) => {
    res.status(err.status || 500).json({
        message: "Internal Server Error"
    })
}

/* 404 Page Not found */
exports.notFound = (res) => {
    res.status(404).json({
        message: "page not found"
    })
}