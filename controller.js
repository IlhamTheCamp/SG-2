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
exports.getcontroller = (req,res)=> {
    res.send(data)
}
exports.getcontroller1 = (req,res)=> {
    res.send(data[req.params.index])
}
exports.storecon = (req,res) => {
    let mahasiswa = {
        nim : req.body.nim,
        nama : req.body.nama,
        kelas : req.body.kelas
    }
    data.push(mahasiswa)
    res.send(data)
    console.log("Input user berhasil")
}
exports.updatecon = (req,res) => {
    let update_mhs = {
        nim : req.body.nim,
        nama : req.body.nama,
        kelas : req.body.kelas
    }
    data[req.params.index] = update_mhs
    res.send(data)
}
exports.deletecon = (req,res) => {
    data.splice(req.params.index, 1)
    res.send(data)
}