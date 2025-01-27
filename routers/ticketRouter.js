const ticketRouter = require('express').Router();
const ticketController = require('../controllers/ticketController');

ticketRouter.get('/', ticketController.getAllTickets);
ticketRouter.get('/:id', ticketController.getTicketById);
ticketRouter.post('/', ticketController.createTicket);
ticketRouter.put('/:id', ticketController.updateTicket);
ticketRouter.delete('/:id', ticketController.deleteTicket);

module.exports = ticketRouter;