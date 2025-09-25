const express = require('express')
const app =  express()

app.use(express.json())

let transactions = []
let nextId = 1

app.get('/', (req,res)=>{
    res.json({ok: true, service: 'expense-api' })
})

// Expects input in this format
// {
//         "amount": 200,
//         "type": "credit",
//         "category": "food",
//         "description": "food expense"
// } 
// type is an enum(credit || debit)

app.post('/transactions',(req,res)=>{
    const t = req.body
    const tx = {
        id: nextId++,
        amount: t.amount,
        type: t.type,
        category: t.category,
        description: t.description,
        createdAt: new Date().toISOString()
    }
    transactions.push(tx)
    res.status(201).json({result:"This Entry was Successfully Added",Entry:tx})
})

app.get('/transactions', (req,res)=>{
    res.json(transactions)
})

app.delete('/transactions/:id',(req,res)=>{
    const id = Number(req.params.id)
    const idx = transactions.findIndex(x=>x.id === id)
    if (idx === -1) return res.sendStatus(404)
    const [removed] = transactions.splice(idx, 1)
    res.json({result:"This Entry was Successfully Deleted",Entry:removed})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Expense API listening on ${PORT}`))