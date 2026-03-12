import mongoose, { Document, Schema } from 'mongoose';

export interface ILibreria {
    name: string;
    address: string;
}

export interface ILibreriaModel extends ILibreria, Document {}

const LibreriaSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<ILibreriaModel>('Libreria', LibreriaSchema);
