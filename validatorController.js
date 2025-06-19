exports.getValidators = (req, res) => {
  const validators = [
    { id: 1, name: 'Validator1', status: 'active' },
    { id: 2, name: 'Validator2', status: 'inactive' },
  ];
  res.json(validators);
};
