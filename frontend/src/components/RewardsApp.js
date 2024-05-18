import React from 'react';
import {
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Card,
  CardContent,
  CardActions
} from '@mui/material';

const RewardsApp = ({
  userId,
  users,
  points,
  rewards,
  redemptionHistory,
  setUserId,
  redeemReward
}) => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Rewards Redemption App
      </Typography>
      <Box mb={3}>
        <FormControl fullWidth>
          <InputLabel id="user-select-label">Select User</InputLabel>
          <Select
            labelId="user-select-label"
            value={userId || ''}
            onChange={(e) => setUserId(e.target.value)}
          >
            {users.map(user => (
              <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Typography variant="h5" gutterBottom>
        Points: {points}
      </Typography>
      <Box mb={3}>
        <Typography variant="h6" gutterBottom>
          Available Rewards
        </Typography>
        <List>
          {rewards.map(reward => (
            <ListItem key={reward.id} divider>
              <Card variant="outlined" sx={{ width: '100%' }}>
                <CardContent>
                  <Typography variant="h6">
                    {reward.name}
                  </Typography>
                  <Typography color="textSecondary">
                    {reward.points} points
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => redeemReward(reward.id)}
                    disabled={points < reward.points}
                  >
                    Redeem
                  </Button>
                </CardActions>
              </Card>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box mb={3}>
        <Typography variant="h6" gutterBottom>
          Redemption History
        </Typography>
        <List>
          {redemptionHistory.map((redemption, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={`Reward redeemed at ${new Date(redemption.redeemed_at).toLocaleString()}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default RewardsApp;
