const { Router } = require('express');
const { getAllPets, getPetById } = require('../controllers/petControllers.js');
const { User, Pet, Campaign, Adoption } = require('../db.js');
// const {getAllPets} =require("..controllers/index.js")

const router = Router();

router.get("/",async (req,res)=>{
    try {
        let allPets = await getAllPets();
        res.status(200).send(allPets);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

router.post("/",async (req,res)=>{
    try {
        let {name, age, species, image, size, color, sex, temperament, adopted, deleted, userId } = req.body;
        let newPet = await Pet.create({name, age, species, image, size, color, sex, temperament, adopted, deleted});
        // let userDb = await User.findOne({where:{id:userId}});
        // newPet.addUser(userDb);
        res.status(200).send("La mascota fue creada");
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.put("/:id",async (req,res)=>{
    try {
        let {id} = req.params;
        let {name, age, species, image, size, color, sex, temperament, adopted, deleted} = req.body;
        Pet.update({
            name, age, species, image, size, color, sex, temperament, adopted, deleted
          }, {
            where: {
              id
            }
        });
        res.status(200).send("Mascota actualizada")
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/:id",async (req,res)=>{
    try {
        let {id} = req.params;
        Pet.update({
            deleted: true
          }, {
            where: {
              id
            }
        });
        res.status(200).send("Mascota eliminada")
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get("/:id",async (req,res)=>{
    try {
        let {id} = req.params;
        let pet = await getPetById(id);
        if (!pet) throw new Error("Mascota no encontrada");
        else res.status(200).send(pet);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router;