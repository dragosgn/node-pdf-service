var pdf = require('pdfkit')
var fs = require('fs')

var myDoc = new pdf;

myDoc.pipe(fs.createWriteStream('node.pdf'))

myDoc.font('Times-Roman')
      .fontSize(48)
      .text('This is the first NodeJs PDF Document', 100, 100)

myDoc.end()
