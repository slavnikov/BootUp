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

  def update
    @reward = Reward.find_by(id: params[:id])

    if @reward && @reward.update(reward_params)
      @project = @reward.project
      @user = @project.admin

      render 'api/projects/show_payload'
    else
      render json: @reward.errors.full_messages, status: 404
    end
  end

  def destroy
    @reward = Reward.find_by(id: params[:id])
    @reward.destroy

    render :show
  end

  private

  def reward_params
    params.require(:reward).permit(:name, :description, :value, :project_id, :delivery_date)
  end
end
