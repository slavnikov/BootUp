class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  private

  def project_params
    params.require(:project).permit(
      :admin_id,
      :title,
      :subtitle,
      :category,
      :sub_category,
      :country,
      :story,
      :end_date
    )
  end
end