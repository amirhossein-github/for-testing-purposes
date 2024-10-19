const fs = require('fs');

function readJsonFile(path){
    try {
        return fs.readFileSync(path).toString()
        
    } catch (error) {
        return error
        
    }
}

function response(req, res, code, message, contentType={'Content-Type': 'application/json'}){
    try {
        res.writeHead(code, contentType);
        // if message is string and not string
        try { res.write(message) } catch (e) { res.write(JSON.stringify(message)) }
        res.end()
        
    } catch (error) {
        console.log('[ERROR]: Start\n', error, '[ERROR]: End\n')
        
        
    }
}

const methods = {
    readJsonFile,
    response
}

module.exports = methods