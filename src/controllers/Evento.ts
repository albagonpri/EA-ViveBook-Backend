import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Evento from '../models/Evento';

const createEvento = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const evento = new Evento({
            _id: new mongoose.Types.ObjectId(),
            ...req.body
        });
        const savedEvento = await evento.save();
        return res.status(201).json(savedEvento);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getEvento = async (req: Request, res: Response, next: NextFunction) => {
    const eventoId = req.params.eventoId;
    try {
        const evento = await Evento.findById(eventoId).populate('libreria');
        return evento ? res.status(200).json(evento) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getAllEventos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const eventos = await Evento.find().populate('libreria');
        return res.status(200).json(eventos);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const updateEvento = async (req: Request, res: Response, next: NextFunction) => {
    const eventoId = req.params.eventoId;
    try {
        const evento = await Evento.findById(eventoId);
        if (evento) {
            evento.set(req.body);
            const savedEvento = await evento.save();
            return res.status(201).json(savedEvento);
        } else {
            return res.status(404).json({ message: 'not found' });
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const deleteEvento = async (req: Request, res: Response, next: NextFunction) => {
    const eventoId = req.params.eventoId;
    try {
        const evento = await Evento.findByIdAndDelete(eventoId);
        return evento ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export default { createEvento, getEvento, getAllEventos, updateEvento, deleteEvento };
