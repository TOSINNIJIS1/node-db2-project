const express = require('express')

const Hub =  require('../data/db-config.js')

const router = express.Router();


//C


router.post('/', (req, res) => {
    const carsBody = req.body;

    Hub('cars')
    .insert(carsBody)
    .then(car => res.status(200).json(car))
    .catch(error => res.status(500).json({errorMessage: 'Car Not Created', error}))

})

//R
router.get('/', (req, res) => {
    const limit = req.query.limit || -1
    const order = req.query.order || 'id'
    const sort = req.query.sort || 'asc'
   
    Hub
    .select()
    .from('cars')
    .limit(limit)
    .orderBy(order, sort)
    .then(cars =>  res.json(cars))
    .catch(error => res.status(500).json({errorMessage: 'Error Retrieving Cars Info', error}))
})


//


//R by ID

router.get('/:id', (req, res) => {
    const {id} = req.params
    Hub.select()
    .from('cars')
    .where({id})
    .then(car => res.status(200).json(car))
    .catch(error => res.status(500).json({errorMessage: 'Car ID not found', error}))
})

//U

router.put('/:id', (req, res) => {
    const {id} = req.params
    const body = req.body

    Hub('cars')
    .where({id})
    .update(body)
    .then(car => res.status(200).json(car))
    .catch(error => res.status(500).json({errorMessage: 'Car Info Not Edited', error}))
})



//D

router.delete('/:id', (req, res) => {

    const {id} = req.params
    const body = req.body

    Hub('cars')
    .where({id})
    .del(body)
    .then(car => res.status(200).json(car))
    .catch(error => res.status(500).json({errorMessage: 'Car Info Not Deleted', error}) )
})



module.exports = router;
