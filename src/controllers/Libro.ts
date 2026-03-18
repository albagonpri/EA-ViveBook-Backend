import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import LibroService from '../services/Libro';

const createLibro = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const libro = await LibroService.createLibro(req.body);
        const savedLibro = await libro.save();
        return res.status(201).json(savedLibro);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getLibro = async (req: Request, res: Response, next: NextFunction) => {
    const libroId = req.params.libroId;
    try {
<<<<<<< HEAD
        const libro = await LibroService.getLibro(libroId);
=======
        const libro = await Libro.findById(libroId).populate('author owner libreria');
>>>>>>> develop/models
        return libro ? res.status(200).json(libro) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getAllLibros = async (req: Request, res: Response, next: NextFunction) => {
    try {
<<<<<<< HEAD
        const libros = await LibroService.getAllLibros();
=======
        const libros = await Libro.find().populate('author owner libreria');
>>>>>>> develop/models
        return res.status(200).json(libros);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const updateLibro = async (req: Request, res: Response, next: NextFunction) => {
    const libroId = req.params.libroId;
    try {
        const libro = await LibroService.updateLibro(libroId, req.body);
        if (libro) {
            return res.status(201).json(libro);
        } else {
            return res.status(404).json({ message: 'not found' });
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const deleteLibro = async (req: Request, res: Response, next: NextFunction) => {
    const libroId = req.params.libroId;
    try {
        const libro = await LibroService.deleteLibro(libroId);
        return libro ? res.status(201).json(libro) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

<<<<<<< HEAD
const restoreLibro = async (req: Request, res: Response, next: NextFunction) => {
    const libroId = req.params.libroId;
    try {   
        const libro = await LibroService.restoreLibro(libroId);
        return libro ? res.status(200).json(libro) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
export default { createLibro, getLibro, getAllLibros, updateLibro, deleteLibro, restoreLibro };
=======
export default { createLibro, getLibro, getAllLibros, updateLibro, deleteLibro };
>>>>>>> develop/models
