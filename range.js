module.exports = (req, res, next) => {
    res.header('Content-Range', 'posts 0-50/10')
    res.header('Content-Range', 'images 0-20/20')
    next()
}