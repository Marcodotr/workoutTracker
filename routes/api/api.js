const router = require('express').Router();
const workout = require('../../models');

router.post('/workouts', ({ body }, res) => {
    workout.create(body)
    .then(Workout => {
        res.json(Workout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get('/workouts', (req, res) => {
  //console.log(workout.workouts.find({}))
    workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put('/workouts/:id', ({body, params}, res) => {
    workout.findByIdAndUpdate({_id : params.id}, {$push: {exercises : body}})
    .then(workoutRes => {
        res.json(workoutRes);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get('/workouts/range', (req, res) => {
    workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    })
})


module.exports = router;