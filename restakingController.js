exports.getRestakers = (req, res) => {
  const restakers = [
    { id: 1, name: 'Alice', stake: 1000 },
    { id: 2, name: 'Bob', stake: 1500 },
  ];
  res.json(restakers);
};
