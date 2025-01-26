/**
 * @swagger
 * /tickets:
 *   get:
 *     summary: Get all tickets
 *     description: Retrieves all tickets from the database.
 *     responses:
 *       200:
 *         description: A list of tickets or a message indicating no tickets were found.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /tickets/{id}:
 *   get:
 *     summary: Get ticket by ID
 *     description: Retrieves a specific ticket by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the ticket to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The ticket if found.
 *       400:
 *         description: Invalid ticket ID format.
 *       404:
 *         description: Ticket not found.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /tickets:
 *   post:
 *     summary: Create a new ticket
 *     description: Creates a new ticket.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               userOwnerId:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created ticket.
 *       400:
 *         description: Ticket data is required or invalid user ID format.
 *       500:
 *         description: Server error.
 */
