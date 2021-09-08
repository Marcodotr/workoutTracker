const router = require('express').Router();
const workout = require('../models/workout');

router.post('/api/workouts', )

router.get('/api/workouts', (req, res) => {
    workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put('/api/workouts/:id',)

module.exports = router;