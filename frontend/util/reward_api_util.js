export const createReward = (reward) => {
  return $.ajax({
    method: 'post',
    url: '/api/rewards'
  });
};
