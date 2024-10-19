"use strict";
const os = require('os');
const OS = {
    type: os.type(),
    arch: os.arch(),
    platform: os.platform(),
    release: os.release(),
    version: os.version(),
    uptime: (os.uptime() / 60 / 60).toFixed() + ' H',
    userInfo: os.userInfo(),
    totalmem: os.totalmem(),
    freemen: os.freemem(),
    cpus: os.cpus(),
    networkInterfaces: os.networkInterfaces()
};
console.log(OS);
