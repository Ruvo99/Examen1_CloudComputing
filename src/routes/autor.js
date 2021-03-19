const router = require('express').Router()

router.get('/', (req, res)=>{
    res.send({ //Mandar respuesta con autor y el servicio en formato JSON al acceder a la ruta /autor
        "alumno": "MARN",
        "servicio": "Cloud Foundry en IBM Cloud"
    })
})

module.exports = router