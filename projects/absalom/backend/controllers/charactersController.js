function charactersController(Character) {
  function getMethod(req, res) {
    const { ownerId } = req.query;
    const query = { owner: ownerId };
    const findCharactersCallback = (error, payload) => {
      error ? res.send(error) : res.json(payload);
    };
    Character.find(query)
      .populate('owner')
      .exec(findCharactersCallback);
  }

  function patchMethod(req, res) {
    console.log(req);
    const { typeValue, searchValue } = req.body;
    const query = { [typeValue]: searchValue };
    console.log(query);
    const findCharactersCallback = (error, payload) => {
      error ? res.send(error) : res.json(payload);
    };
    Character.find(query)
      .populate('owner')
      .exec(findCharactersCallback);
  }

  return {
    getMethod,
    patchMethod,
  };
}

module.exports = charactersController;
