import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'

var mv = require('mv');
 
export const config = {
    api: {
       bodyParser: false,
    }
};
 
export default async (req, res) => {
    
    const data = await new Promise((resolve, reject) => {
       const form = new IncomingForm()
     
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            console.log(fields, files)
            console.log(files.file[0].filepath)
            var oldPath = files.file[0].filepath;
            console.log(oldPath)
            const d = new Date();
            let ms = d.getTime();
            var newPath = `/tmp/`+ms+".png";
            mv(oldPath, newPath, function(err) {
                console.log("err : ",err) 
            });
            res.status(200).json({ ms })
        })
    })
    
}