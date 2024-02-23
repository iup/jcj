#!/usr/bin/env node
"use strict"
let fs     = require('fs')
let path   = require('path')
let config = {
    "compilerOptions": {
        "target": "ES6"
    },
    "exclude": [
        "node_modules"
    ]
}
let file = path.join(process.cwd(), 'jsconfig.json')
fs.writeFile(file, JSON.stringify(config, null, 2))