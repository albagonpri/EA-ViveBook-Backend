import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Libreria from '../models/Libreria';

const createLibreria = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const libreria = new Libreria({
            _id: new mongoose.Types.ObjectId(),
            ...req.body
        });
        const savedLibreria = await libreria.save();
        return res.status(201).json(savedLibreria);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getLibreria = async (req: Request, res: Response, next: NextFunction) => {
    const libreriaId = req.params.libreriaId;
    try {
        const libreria = await Libreria.findById(libreriaId);
        return libreria ? res.status(200).json(libreria) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getAllLibrerias = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const librerias = await Libreria.find();
        return res.status(200).json(librerias);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const updateLibreria = async (req: Request, res: Response, next: NextFunction) => {
    const libreriaId = req.params.libreriaId;
    try {
        const libreria = await Libreria.findById(libreriaId);
        if (libreria) {
            libreria.set(req.body);
            const savedLibreria = await libreria.save();
            return res.status(201).json(savedLibreria);
        } else {
            return res.status(404).json({ message: 'not found' });
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const deleteLibreria = async (req: Request, res: Response, next: NextFunction) => {
    const libreriaId = req.params.libreriaId;
    try {
        const libreria = await Libreria.findByIdAndDelete(libreriaId);
        return libreria ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export default { createLibreria, getLibreria, getAllLibrerias, updateLibreria, deleteLibreria };
