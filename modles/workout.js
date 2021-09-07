const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day:{
            type:Date,
            default: date.now
        },

        exercises:[{

            type: {
                type: String,
                trim:true,
                required: 'enter exercise'
            },

            name: {
                type: String,
                trim: true,
                required: 'enter excercise'
            },
            
            weight: {
                type: Number
            },

            sets: {
                type: Number
            },

            reps: {
                type: Number
            },
            
            duration: {
                type: Number
            },

            distance: {
                type: Number
            }
        }]
    }
);

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;