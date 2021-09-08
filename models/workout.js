const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day:{
            type:Date,
            default: Date.now
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

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total = exercise.duration;
    }, 0);
})

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;