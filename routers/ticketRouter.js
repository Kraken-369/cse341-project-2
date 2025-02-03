const ticketRouter = require('express').Router();
const ticketController = require('../controllers/ticketController');
const isAuthenticated = require('../middleware/authenticate');

ticketRouter.get('/', ticketController.getAllTickets);
ticketRouter.get('/:id', ticketController.getTicketById);
ticketRouter.post('/', isAuthenticated, ticketController.createTicket);
ticketRouter.put('/:id', isAuthenticated, ticketController.updateTicket);
ticketRouter.delete('/:id', isAuthenticated, ticketController.deleteTicket);

module.exports = ticketRouter;