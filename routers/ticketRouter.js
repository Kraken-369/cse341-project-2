const ticketRouter = require('express').Router();
const ticketController = require('../controllers/ticketController');

ticketRouter.get('/', ticketController.getAllTickets);
ticketRouter.get('/:id', ticketController.getTicketById);
ticketRouter.post('/', ticketController.createTicket);

module.exports = ticketRouter;