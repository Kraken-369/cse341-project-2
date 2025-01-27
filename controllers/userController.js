const mongoose = require('mongoose');
const db = require('../connects/db');
const user = require('../models/userModel')(mongoose);
const { ObjectId } = require('mongoose').Types;

const getAllUsers = async (req, res) => {
  try {
    const users = await db.getDB().collection('users').find({}).toArray();
    res.setHeader('Content-Type', 'application/json');
    if (users.length === 0) {
      return res.status(200).json({ message: 'No users found' });
    }
    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};

const getUserById = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }

  try {
    const user = await db.getDB().collection('users').findOne({ _id: ObjectId.createFromHexString(req.params.id) });
    if (user) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};

const createUser = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'User data is required' });
  }
  
  const newUser = new user(req.body);
  
  try {
    await newUser.save()
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json(user);

  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
}

const updateUser = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "User data is required" });
  }
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }
  try {
    if (
      !(await db
        .getDB()
        .collection("users")
        .findOneAndUpdate(
          { _id: ObjectId.createFromHexString(req.params.id) },
          { $set: req.body },
          {
            new: true,
            upsert: false,
          }
        ))
    ) {
      return res.status(404).json({ error: "User not found" });
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }
  try {
    if (
      !(await db
        .getDB()
        .collection("users")
        .findOneAndDelete({ _id: ObjectId.createFromHexString(req.params.id) }))
    ) {
      return res.status(404).json({ error: "User not found" });
    }

    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};