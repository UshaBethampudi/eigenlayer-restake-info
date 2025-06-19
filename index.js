const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Import routes
const restakingRoutes = require('./routes/restakingRoutes');
const rewardRoutes = require('./routes/rewardRoutes');
const validatorRoutes = require('./routes/validatorRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/restaking', restakingRoutes);
app.use('/api/rewards', rewardRoutes);
app.use('/api/validators', validatorRoutes);

// Default route for root path
app.get('/', (req, res) => {
  res.send('🚀 EigenLayer Restaking API is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
