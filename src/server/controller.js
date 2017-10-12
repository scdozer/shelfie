module.exports = {
  getShelfie: (req, res, next) =>{
    const dbInstance = req.app.get('db');
    dbInstance.get_shelfie()
      .then(shelfie => res.status(200).send(shelfie))
      .catch(error => console.log(error))
  },

  getShelf: (req, res, next) =>{
    const dbInstance = req.app.get('db');
    const { shelfid } = req.params;
    dbInstance.get_shelf({ shelfid })
      .then(shelf => res.status(200).send(shelf))
      .catch(error => console.log(error))
  },

  getBins: (req, res, next) =>{
    const dbInstance = req.app.get('db');
    const { shelfid } = req.params;
    dbInstance.get_bins({ shelfid })
      .then(bins => res.status(200).send(bins))
      .catch(error => console.log(error))
  },

  createBins: (req, res, next) =>{
    const dbInstance = req.app.get('db');
    const { shelfId, positionNBR, binNM, priceAMT } = req.body;
    dbInstance.create_bin({ shelfId, positionNBR, binNM, priceAMT })
      .then(bins => res.status(200).send(bins))
      .catch(error => console.log(error))
  },

  deleteBins: (req, res, next) =>{
    const dbInstance = req.app.get('db');
    const { positionNBR } = req.body;
    dbInstance.delete_bin({ positionNBR })
      .then(bins => res.status(200).send(bins))
      .catch(error => console.log(error))
  }
}
