const express = require("express");
const router = express.Router();
const {
  getAlltask,
  createTask,
  updateTask,
  getTask,
  deleteTask,
} = require(`../controller/task`);

router.route(`/`).get(getAlltask).post(createTask);
router.route(`/:id`).get(getTask).patch(updateTask).delete(deleteTask);
module.exports = router;
