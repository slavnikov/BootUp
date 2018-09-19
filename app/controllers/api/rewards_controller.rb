class Api::RewardsController < ApplicationController
  def create
    @reward = Reward.new(reward_params)

    if @reward.save
      @project = @reward.project
      @user = @project.admin

      render 'api/projects/show_payload'
    else
      render json: 'error', status: 500
    end
  end

  private

  def reward_params
    params.require(:reward).permit(:name, :description, :value, :project_id, :delivery_date)
  end
end
