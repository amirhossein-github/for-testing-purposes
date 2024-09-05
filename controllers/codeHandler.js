const _404 = (req, res) => {
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.write('404 Not Found')
    res.end( /* req.url.split('/').toString() */ )
}

const _405 = (req, res) => {
    res.writeHead(405, {'Content-Type': 'text/plain'})
    res.write('405 Method Not Allowed')
    res.end( /* req.url.split('/').toString() */ )
}

// ---
const codeHandler = {
    _404,
    _405
}
module.exports = codeHandler