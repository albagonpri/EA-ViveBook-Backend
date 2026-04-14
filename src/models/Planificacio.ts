import mongoose, { Schema, Document, Types } from 'mongoose'

export interface IMilestone {
  description: string
  status: 'pending' | 'completed'
}

export interface IPlanificacio extends Document {
  title: string
  book: Types.ObjectId
  milestones: IMilestone[]
  IsDeleted: boolean
}

const MilestoneSchema = new Schema<IMilestone>(
  {
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'pending'
    }
  },
  { _id: false }
)

const PlanificacioSchema = new Schema<IPlanificacio>(
  {
    title: { type: String, required: true },
    book: { type: Schema.Types.ObjectId, ref: 'Libro', required: true },
    milestones: { type: [MilestoneSchema], default: [] },
    IsDeleted: { type: Boolean, default: false }
  },
  { timestamps: true, versionKey: false }
)

export default mongoose.model<IPlanificacio>('Planificacio', PlanificacioSchema)