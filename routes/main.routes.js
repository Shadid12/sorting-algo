import express from 'express'
import {mergeSort} from './merge'
import { bubbleSort } from './buble';

const router = express.Router()

router.get('/', (req, res) => res.send({'Hello': 'Worlds'}))

// Merge Sort
router.post('/merge', (req, res) => {
    let unsorted = req.body.unsorted
    const list = req.body.unsorted
    let sorted = mergeSort(list)
    res.send({
        sorted: sorted
    })
})

// Buble Sort
router.post('/buble', (req, res) => {
    let unsorted = req.body.unsorted
    const list = req.body.unsorted
    let sorted = bubbleSort(list)
    res.send({
        sorted: sorted
    })
})

export default router