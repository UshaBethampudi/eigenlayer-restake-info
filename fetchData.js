const mongoose = require('mongoose');
require('dotenv').config();
const Restaker = require('../models/restaker');

async function fetchData() {
  await mongoose.connect(process.env.MONGO_URI);

  const dummyRestakers = [
    {
      userAddress: '0x1234...abcd',
      amountRestakedStETH: '1000000000000000000', // 1 stETH
      targetAVSOperatorAddress: '0x5678...efgh',
    },
    {
      userAddress: '0xaaaa...bbbb',
      amountRestakedStETH: '2500000000000000000', // 2.5 stETH
      targetAVSOperatorAddress: '0xcccc...dddd',
    },
  ];

  await Restaker.deleteMany({});
  await Restaker.insertMany(dummyRestakers);
  console.log('✅ Dummy Restakers data saved.');
  process.exit();
}

fetchData().catch(console.error);
