const router = require('express').Router()
const {Category} = require('../../db/models')

router.get('/', async(req, res) => {
    try {
        const category = await Category.findAll()
        if(category) {
            res.status(200).json({message: 'success', category})
            return
        }
        res.status(400).json({message: 'еще раз'})
    } catch ({message}) {
        res.status(500).json({message})
    }
})