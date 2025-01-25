const mongoose = require('mongoose');
const db = require('../connects/db');
const ticket = require('../models/ticketModel')(mongoose);
const { ObjectId } = require('mongoose').Types;

const getAllTickets = async (req, res) => {
  try {
    const tickets = await db.getDB().collection('tickets').find({}).toArray();
    res.setHeader('Content-Type', 'application/json');
    if (tickets.length === 0) {
      return res.status(200).json({ message: 'No tickets found' });
    }
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};

const getTicketById = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid ticket ID format" });
  }

  try {
    const ticket = await db.getDB().collection('tickets').findOne({ _id: ObjectId.createFromHexString(req.params.id) });
    if (ticket) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(ticket);
    } else {
      res.status(404).json({ message: 'Ticket not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};

const createTicket = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'Ticket data is required' });
  }

  if (!ObjectId.isValid(req.body.userOwnerId)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }

  const newTicket = new ticket(req.body);

  try {
    await newTicket.save()
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};

module.exports = {
  getAllTickets,
  getTicketById,
  createTicket
};