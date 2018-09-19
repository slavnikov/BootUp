class Api::RewardsController < ApplicationController
  def create
    @reward = Reward.new(reward_params)
    debugger
    if @reward.save
      render json: 'success', status: 200
    else
      render json: 'error', status: 500
    end
  end

  private

  def reward_params
    params.require(:reward).permit(:name, :description, :value, :project_id, :delivery_date)
  end
end
