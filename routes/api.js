const router = require('express').Router();
const workout = require('../models');

router.post('/api/workouts', ({ body }, res) => {
    workout.create(body)
    .then(Workout => {
        res.json(Workout);
    })
    .catch(err => {
        res.status(404).json(err);
    });
});

router.get('/api/workouts', (req, res) => {
    workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put('/api/workouts/:id', ({body, params}, res) => {
    workout.findByIdAndUpdate({'_id' : params.id}, {$push: {exercises : body}})
    .then(workoutRes => {
        res.json(workoutRes);
    })
    .catch(err => {
        res.status(404).json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
    workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(404).json(err);
    })
})


module.exports = router;