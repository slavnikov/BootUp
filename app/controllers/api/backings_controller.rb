class Api::BackingsController < ApplicationController
  def create
    @backing = Backing.new(backing_params)

    if @backing.save
      @project = @backing.project
      @user = @project.admin

      render 'api/projects/show_payload'
    else
      render json: @backing.errors.full_messages, status: 404
    end
  end

  private

  def backing_params
    params.require(:backing).permit(:value, :user_id, :project_id, :reward_id)
  end
end
