import express from 'express';
import CommandController from '../controllers/CommandController.js';

const CommandRouter = express.Router();

CommandRouter.get("/",       (req, res) => CommandController.getAllCommands(req, res));
CommandRouter.get("/:id",    (req, res) => CommandController.getCommandById(req, res));
CommandRouter.post("/",      (req, res) => CommandController.saveCommand(req, res));
CommandRouter.put("/:id", (req, res) => CommandController.updateCommandById(req, res));
CommandRouter.delete("/:id", (req, res) => CommandController.deleteCommandById(req, res));

export default CommandRouter;