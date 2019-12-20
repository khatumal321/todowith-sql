import express from 'express'
import db from './../config/db'
const router = express.Router()


router.get("/tasks", async (req: string, res: any) => {
    db.query(`SELECT * FROM todos`, (err: any, responce: any) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send({
                data: responce.rows
            })
        }
    })
})
// router.get("/tasks/:id", async (req: string, res: any) => {
//     const users = await Todo.findOne({});
//     res.send({ users })
// })


router.post("/tasks", (req: express.Request, res: express.Response) => {
    let value = req.body
    console.log(value)
    db.query(`INSERT INTO todos(title,description,done)VALUES($1,$2,$3)`, [value.title, value.description, value.done], (err: any, res: any) => {
        if (err) {
            console.log(err)
        }
        if (res) {
            console.log(res)
        }
    })
})


router.delete("/delete", async (req: express.Request, res: express.Response) => {
    let value = req.body
    db.query(`DELETE FROM todos WHERE id = ${value.id}`, (err: any, res: any) => {
        if (err) {
            console.log(err)
        }
        if (res) {
            console.log(res)
        }
    })
})



router.put("/update", (req: express.Request, res: express.Response) => {
    let value = req.body
    console.log(typeof (value.title))
    db.query(`UPDATE todos SET title = $1,description=$2,done=$3 WHERE id = $4 `, [value.title,value.description,value.done,value.id], (err: any, res: any) => {
        if (err) {
            console.log(err)
        }
        if (res) {
            console.log(res)
        }
    })
})


module.exports = router