/**
 * @swagger
 * /user:
 *    get:
 *      summary: Get all users
 *      description: Retrieve a list of all users.
 *      responses:
 *        200:
 *          description: A list of users
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 *                      example: "60d21b4667d0d8992e610c85"
 *                    firstname:
 *                      type: string
 *                      example: "John"
 *                    lastname:
 *                      type: string
 *                      example: "Doe"
 *                    email:
 *                      type: string
 *                      example: "john.doe@example.com"
 */

/** 
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     description: This endpoint allows the creation of a new user by providing user details in the request body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 example: "John"
 *               lastname:
 *                 type: string
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "60d21b4667d0d8992e610c85"
 *                 firstname:
 *                   type: string
 *                   example: "John"
 *                 lastname:
 *                   type: string
 *                   example: "Doe"
 *                 email:
 *                   type: string
 *                   example: "john.doe@example.com"
 *       400:
 *         description: Bad Request - User data is required.
 *       500:
 *         description: Internal Server Error - Error message.
 */

/** 
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Retrieve a user by their unique ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A user object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "60d21b4667d0d8992e610c85"
 *                 firstname:
 *                   type: string
 *                   example: "John"
 *                 lastname:
 *                   type: string
 *                   example: "Doe"
 *                 email:
 *                   type: string
 *                   example: "john.doe@example.com"
 *       400:
 *         description: Bad Request - The ID provided is invalid.
 *       404:
 *         description: Not Found - No user found with the provided ID.
 */
