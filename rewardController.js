exports.getRewards = (req, res) => {
  const rewards = [
    { id: 1, restaker: 'Alice', reward: 120 },
    { id: 2, restaker: 'Bob', reward: 90 },
  ];
  res.json(rewards);
};
