import { useRouter } from 'next/router';
import fs from 'fs'
import path from 'path'


export default function  Search(req , res) {
  const query = req.query;
  const { productId } = query;
  console.log(productId) 

  const filePath = path.resolve('.', `/tmp/`+productId+".png")
  const imageBuffer = fs.readFileSync(filePath)
  res.setHeader('Content-Type', 'image/jpg')
  res.send(imageBuffer)
}
 