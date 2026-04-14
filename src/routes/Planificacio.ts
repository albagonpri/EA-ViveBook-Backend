import { Router } from 'express'
import * as planificacioController from '../controllers/Planificacio'

const router = Router()

router.post('/', planificacioController.createPlanificacio)
router.get('/', planificacioController.getPlanificacions)
router.get('/all', planificacioController.getAllPlanificacions)
router.get('/:id', planificacioController.getPlanificacioById)
router.put('/:id', planificacioController.updatePlanificacio)
router.put('/restore/:id', planificacioController.restorePlanificacio)
router.delete('/:id', planificacioController.deletePlanificacio)
router.delete('/permanent/:id', planificacioController.permanentDeletePlanificacio)

export default router