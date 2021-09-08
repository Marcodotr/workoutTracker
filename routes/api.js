const router = require('express').Router();
const db = require('../models');

router.post('/api/workouts',(({ body }, res) => {
    db.Workout.create(body)
    .then((dbWourkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400);
    })
}) )

router.get('/api/workouts/', (req, res) => {
    db.Workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put('/api/workouts/:id',({body, params}, res) => {
    db.Workout.findByIdAndUpdate({_id : params.id}, {$push: {exercises : body}})
    .then(workoutRes => {
        res.json(workoutRes);
    })
    .catch(err => {
        res.status(404).json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400);
    })
})


module.exports = router;