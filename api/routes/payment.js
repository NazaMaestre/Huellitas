const { Router } = require("express");
const mercadopago = require("mercadopago");
const { MERCADOPAGO_KEY } = process.env;




const router = Router();


mercadopago.configure({access_token: MERCADOPAGO_KEY})

router.post("/", async (req, res) => {
       try {
const donation = req.body;
let preference = {
    items:[{
        id: donation.id,
        title: donation.title,
        currency_id: 'ARS',
        picture_url: donation.image,
        description: donation.description,
        category_id: 'donation',
        quantity: 1,
        unit_price: donation.quantity
}],
back_urls:{
    success: 'http://localhost:3000/payment/gracias',
    failure: 'http://localhost:3000/payment/error',
    pending:'',
},
auto_return: 'approved',
binary_mode: true,

}
mercadopago.preferences.create(preference).then(function(response){
  res.status(200).send({response})
  // console.log(preference.items);
});
    } catch (error) {
      res.status(404).send({error:error.message});
    }
  });



  router.get("/gracias", async (req, res) => {
   
      const { status } = req.query;
 
 
      res.status(200).send(status);
    
  })


module.exports = router;