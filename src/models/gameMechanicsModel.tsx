import mongoose from 'mongoose';

const gameMechanicSchema = new mongoose.Schema({
  keyword: String,
  description: String
});

const GameMechanic = mongoose.model('GameMechanic', gameMechanicSchema);

export default GameMechanic;
