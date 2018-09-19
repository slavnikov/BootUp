export const createReward = (reward) => {
  return $.ajax({
    method: 'post',
    url: '/api/rewards',
    data: reward
  });
};

export const updateReward = (reward) => {
  return $.ajax({
    method: 'patch',
    url: `/api/rewards/${reward.id}`,
    data: {
      reward: reward
    }
  });
};

export const deleteReward = (id) => {
  return $.ajax({
    method: 'delete',
    url: `/api/rewards/${id}`
  });
};
