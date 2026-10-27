require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.disable('x-powered-by')
app.use(cors())
app.use(express.json({limit:'1mb'}))
app.use('/api', require('./routes/routes_colabore.js'))
app.get('/health', (req,res) => res.status(200).json({status:'ok'}))
app.get('/health/db', async (req,res) => {
    try { await require('./models/global_knex/global_knex.js').raw('select 1'); return res.json({status:'ok', database:'connected'}) }
    catch (error) { return res.status(503).json({status:'error', database:'unavailable'}) }
})
if(require.main === module) app.listen(process.env.PORT || 3000, () => console.log('API Colabore iniciada'))
module.exports = app
