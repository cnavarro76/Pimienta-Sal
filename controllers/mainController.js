const path = require("path");
const platillos = require("./arregloPlatillos");

const mainController = {
  home: (req, res) => {
    res.render("index", { platillos });
  },
  detalleMenu: (req, res) => {
    const idRecuperado = req.params.id-1;
    res.render("detalleMenu", { 
        platillo: platillos[idRecuperado] 
    });
  },
};

module.exports = mainController;
