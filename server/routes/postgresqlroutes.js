const express = require("express");
const router = express.Router();

const con = require("../connnection");

router.post("/", async (req, res) => {
  try {
    const { todo } = req.body;

    const insert_query = "insert into todolist (todo) values($1) returning *";

    const newtodo = await con.query(insert_query, [todo]);
    res.json(newtodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const fetch_query = "select * from todolist";
    const alltodo = await con.query(fetch_query);
    res.json(alltodo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const  id  = req.params.id;
    const { todo } = req.body;
    const update_query = "update todolist set todo=$1 where id=$2";

    const updateTodo = await con.query(update_query, [todo, id]);
    res.json("Todo was updated");
  } catch (error) {
    console.error(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const  id  = req.params.id;
    const delete_query = "delete from todolist where id=$1";
    const deteteTodo = await con.query(delete_query, [id]);
    res.json("Todo was deleted");
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
