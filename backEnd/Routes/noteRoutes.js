const express = require('express')
const { createNotes, getAllNotes, updateNotes, deleteNotes } = require
    ('../Controllers/notesCtrl')

const noteRoutes = express.Router()


noteRoutes.post('/createNotes', createNotes)
noteRoutes.post('/getNotes', getAllNotes)
noteRoutes.put('/updateNotes/:id', updateNotes)
noteRoutes.delete('/deleteNotes/:id', deleteNotes)


module.exports = noteRoutes        