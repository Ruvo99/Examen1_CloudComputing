const router = require('express').Router();

// importamos los routes
const autorRoute = require('./autor');
const homeRoute = require('./home');
const serviceRoute = require('./service');

// paths con su propio route
router.use('/autor', autorRoute);
router.use('/home', homeRoute);
router.use('/service', serviceRoute);

// path con retorno directo
router.use('/', (req, res) => 
{ 
    res.json(
        { 
            version: "0.0.1",
            paths: [
                "/autor",
                "/home",
                "/service"
            ] 
        }
        ); 
}
)

module.exports = router;