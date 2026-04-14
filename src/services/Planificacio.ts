import Planificacio, { IPlanificacio } from '../models/Planificacio'

interface PlanificacioFilters {
  page?: number
  limit?: number
  search?: string
}

export const createPlanificacio = async (data: Partial<IPlanificacio>) => {
  const planificacio = new Planificacio(data)
  return await planificacio.save()
}

export const getPlanificacioById = async (id: string) => {
  return await Planificacio.findById(id).populate('book', 'title isbn')
}

export const getPlanificacions = async (filters: PlanificacioFilters) => {
  const page = Number(filters.page) || 1
  const limit = Number(filters.limit) || 5
  const search = filters.search?.trim() || ''

  const query: any = {
    IsDeleted: false
  }

  if (search) {
    query.title = { $regex: search, $options: 'i' }
  }

  const total = await Planificacio.countDocuments(query)

  const data = await Planificacio.find(query)
    .populate('book', 'title isbn')
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ createdAt: -1 })

  return {
    data,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit)
  }
}

export const getAllPlanificacions = async () => {
  return await Planificacio.find().populate('book', 'title isbn').sort({ createdAt: -1 })
}

export const updatePlanificacio = async (id: string, data: Partial<IPlanificacio>) => {
  return await Planificacio.findByIdAndUpdate(id, data, { new: true }).populate('book', 'title isbn')
}

export const deletePlanificacio = async (id: string) => {
  return await Planificacio.findByIdAndUpdate(id, { IsDeleted: true }, { new: true })
}

export const restorePlanificacio = async (id: string) => {
  return await Planificacio.findByIdAndUpdate(id, { IsDeleted: false }, { new: true })
}

export const permanentDeletePlanificacio = async (id: string) => {
  return await Planificacio.findByIdAndDelete(id)
}