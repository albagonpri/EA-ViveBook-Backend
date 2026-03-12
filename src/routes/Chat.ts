import express from 'express';
import controller from '../controllers/Chat';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

/**
 * @openapi
 * tags:
 *   - name: Chats
 *     description: Endpoints CRUD de chats
 *
 * components:
 *   schemas:
 *     Chat:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         participants:
 *           type: array
 *           items:
 *             type: string
 *           description: Array de IDs de usuarios
 *         libro:
 *           type: string
 *           description: ID del libro (opcional)
 *     ChatCreateUpdate:
 *       type: object
 *       required:
 *         - participants
 *       properties:
 *         participants:
 *           type: array
 *           items:
 *             type: string
 *           example: ["65f1c2a1b2c3d4e5f6789012", "65f1c2a1b2c3d4e5f6789013"]
 *         libro:
 *           type: string
 *           example: "65f1c2a1b2c3d4e5f6789014"
 */

/**
 * @openapi
 * /chats:
 *   post:
 *     summary: Crea un chat
 *     tags: [Chats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChatCreateUpdate'
 *     responses:
 *       201:
 *         description: Creado
 *       422:
 *         description: Validación fallida
 */
router.post('/', ValidateJoi(Schemas.chat.create), controller.createChat);

/**
 * @openapi
 * /chats/{chatId}:
 *   get:
 *     summary: Obtiene un chat por ID
 *     tags: [Chats]
 *     parameters:
 *       - in: path
 *         name: chatId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: No encontrado
 */
router.get('/:chatId', controller.getChat);

/**
 * @openapi
 * /chats:
 *   get:
 *     summary: Lista todos los chats
 *     tags: [Chats]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', controller.getAllChats);

/**
 * @openapi
 * /chats/{chatId}:
 *   delete:
 *     summary: Elimina un chat por ID
 *     tags: [Chats]
 *     parameters:
 *       - in: path
 *         name: chatId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:chatId', controller.deleteChat);

export default router;
