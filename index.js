const express = require('express')
let app = express()
const bodyParser = require('body-parser')
let mhs = require('./controller')
app.use(bodyParser.urlencoded({extended : true}))

let data = [
    {
        nim : "1301184123",
        nama : "Ilham Rizki Hidayat",
        kelas : "IF-42-04"
    },{
        nim : "1302012211",
        nama : "Minatozaki Sana",
        kelas : "IF-42-01"
    }
]

// app.get('/',(req,res)=> {
//     res.send('Halaman Root"')
// })

app.use('/mahasiswa',(req,res,next) => {
    if(req.body.nim) {
        next()
    }else{
        res.send('maaf nim tidak ada')
    }
})

// app.get('/mahasiswa', (req,res)=> {
//     res.send(data)
// })

// app.post('/mahasiswa', (req,res)=> {
//     let mahasiswa = {
//         nim : req.body.nim,
//         nama : req.body.nama,
//         kelas : req.body.kelas
//     }
//     data.push(mahasiswa)
//     res.send(data)
//     console.log("Input user berhasil")
// })

// app.put('/mahasiswa/:index', (req,res)=> {
//     let update_mhs = {
//         nim : req.body.nim,
//         nama : req.body.nama,
//         kelas : req.body.kelas
//     }
//     data[req.params.index] = update_mhs
//     res.send(data)
// })

// app.delete('/mahasiswa/:index', (req,res)=> {
//     data.splice(req.params.index, 1)
//     res.send(data)
// })

app.get('/mahasiswa', mhs.getcontroller)
app.post('/mahasiswa', mhs.storecon)
app.put('/mahasiswa/:index', mhs.updatecon)
app.delete('/mahasiswa/:index', mhs.deletecon)

app.listen(3000)

