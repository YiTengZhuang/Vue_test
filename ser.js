// 載入 express, 現在可以放心使用 import 了
import express from 'express'

import { dirname } from 'path'
import { fileURLToPath } from 'url'

// 載入 body-parser
import bodyParser from 'body-parser'

//import fs from 'fs';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 建立一個 express (也就是網頁伺服器)實體
const app = express()
const port = 7764

// 處理其它網址
// http://localhost:7764/exercise.html
app.use(express.static(`${__dirname}/dist`))

// 設定 body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 處理 /step1 網址
// http://localhost:7764/step1
app.get('/step1', (req, res) => {
  // 回應瀏覽器
  // 標籤也放在 '' 裡面,ex:<h1></h1>
  res.send('Success')
})


// 啟動伺服器
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})