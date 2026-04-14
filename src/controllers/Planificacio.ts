import { Request, Response } from 'express'
import * as planificacioService from '../services/Planificacio'

export const createPlanificacio = async (req: Request, res: Response) => {
  try {
    const planificacio = await planificacioService.createPlanificacio(req.body)
    res.status(201).json(planificacio)
  } catch (error) {
    res.status(500).json({ message: 'Error creating planificacio', error })
  }
}

export const getPlanificacioById = async (req: Request, res: Response) => {
  try {
    const planificacio = await planificacioService.getPlanificacioById(req.params.id)
    if (!planificacio) {
      return res.status(404).json({ message: 'Planificacio not found' })
    }
    res.status(200).json(planificacio)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching planificacio', error })
  }
}

export const getPlanificacions = async (req: Request, res: Response) => {
  try {
    const result = await planificacioService.getPlanificacions({
      page: Number(req.query.page),
      limit: Number(req.query.limit),
      search: req.query.search as string
    })
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching planificacions', error })
  }
}

export const getAllPlanificacions = async (_req: Request, res: Response) => {
  try {
    const planificacions = await planificacioService.getAllPlanificacions()
    res.status(200).json(planificacions)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching all planificacions', error })
  }
}

export const updatePlanificacio = async (req: Request, res: Response) => {
  try {
    const planificacio = await planificacioService.updatePlanificacio(req.params.id, req.body)
    if (!planificacio) {
      return res.status(404).json({ message: 'Planificacio not found' })
    }
    res.status(200).json(planificacio)
  } catch (error) {
    res.status(500).json({ message: 'Error updating planificacio', error })
  }
}

export const deletePlanificacio = async (req: Request, res: Response) => {
  try {
    const planificacio = await planificacioService.deletePlanificacio(req.params.id)
    if (!planificacio) {
      return res.status(404).json({ message: 'Planificacio not found' })
    }
    res.status(200).json(planificacio)
  } catch (error) {
    res.status(500).json({ message: 'Error deleting planificacio', error })
  }
}

export const restorePlanificacio = async (req: Request, res: Response) => {
  try {
    const planificacio = await planificacioService.restorePlanificacio(req.params.id)
    if (!planificacio) {
      return res.status(404).json({ message: 'Planificacio not found' })
    }
    res.status(200).json(planificacio)
  } catch (error) {
    res.status(500).json({ message: 'Error restoring planificacio', error })
  }
}

export const permanentDeletePlanificacio = async (req: Request, res: Response) => {
  try {
    const planificacio = await planificacioService.permanentDeletePlanificacio(req.params.id)
    if (!planificacio) {
      return res.status(404).json({ message: 'Planificacio not found' })
    }
    res.status(200).json({ message: 'Planificacio permanently deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Error permanently deleting planificacio', error })
  }
}