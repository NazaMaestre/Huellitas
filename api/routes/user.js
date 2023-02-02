const { Router } = require("express");
const { User, Pet, Campaign, Adoption } = require("../db.js");
const {
  createUser,
  getAllUser,
  getUserDetail,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await getAllUser();
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send("No se encontraron los datos");
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newUser = await createUser(data);
    res.status(200).send(newUser);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = req.body;
    const updatedUser = await updateUser(id, data);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const changeStatus = await deleteUser(id);
    res.status(200).send(`Se cambio el estado del user ${id}`);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) throw new Error("Falta enviar el id");
    const detail = await getUserDetail(id);
    res.status(200).send(detail);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
