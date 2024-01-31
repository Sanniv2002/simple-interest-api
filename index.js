const express = require("express")

const app = express()


app.get("/", (req, res) => {
    const p = parseInt(req.query.p)
    const r = parseInt(req.query.r)
    const t = parseInt(req.query.t)
    const ans = (p*r*t)/100
    const amount = ans + p
    res.send({
        "Interest": ans.toString(),
        "Total Amount": amount.toString()
    })
})

app.listen(3000)
