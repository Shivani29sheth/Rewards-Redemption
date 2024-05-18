const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const rewardRoutes = require('./routes/rewardRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', rewardRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});