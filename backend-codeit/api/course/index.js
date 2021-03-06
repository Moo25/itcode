// 라우팅 설정
const express = require('express')
const router = express.Router()
const ctrl = require('./course.ctrl')

router.get('/', ctrl.index)
router.get('/:id', ctrl.show)
router.delete('/:id', ctrl.destroy)
router.post('/new-subject', ctrl.create)
router.put('/:id/edit', ctrl.update)

module.exports = router