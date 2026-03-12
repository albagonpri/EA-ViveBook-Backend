import express from 'express';
import controller from '../controllers/Mensaje';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

/**
 * @openapi
 * tags:
 *   - name: Mensajes
 *     description: Endpoints para mensajes de chat
 *
 * components:
 *   schemas:
 *     Mensaje:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         chat:
 *           type: string
 *           description: ID del chat
 *         sender:
 *           type: string
 *           description: ID del remitente
 *         content:
 *           type: string
 *         timestamp:
 *           type: string
 *           format: date-time
 *     MensajeCreate:
 *       type: object
 *       required:
 *         - chat
 *         - sender
 *         - content
 *       properties:
 *         chat:
 *           type: string
 *           example: "65f1c2a1b2c3d4e5f6789012"
 *         sender:
 *           type: string
 *           example: "65f1c2a1b2c3d4e5f6789013"
 *         content:
 *           type: string
 *           example: "Hola, ¿aún está disponible el libro?"
 */

/**
 * @openapi
 * /mensajes:
 *   post:
 *     summary: Crea un nuevo mensaje
 *     tags: [Mensajes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MensajeCreate'
 *     responses:
 *       201:
 *         description: Creado
 *       422:
 *         description: Validación fallida
 */
router.post('/', ValidateJoi(Schemas.mensaje.create), controller.createMensaje);

/**
 * @openapi
 * /mensajes/chat/{chatId}:
 *   get:
 *     summary: Obtiene todos los mensajes de un chat específico
 *     tags: [Mensajes]
 *     parameters:
 *       - in: path
 *         name: chatId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/chat/:chatId', controller.getMensajesByChat);

export default router;
