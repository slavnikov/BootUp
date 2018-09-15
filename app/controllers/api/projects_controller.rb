class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)

    if @project.save
      user = current_user
      user.current_project_id = @project.id
      user.save
      @user = @project.admin

      render :show_payload
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find_by(id: params[:id])

    if @project.update(project_params)
      @user = @project.admin

      render :show_payload
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find_by(id: params[:id])

    if @project
      @user = @project.admin

      render :show_payload
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find_by(id: params[:id])
    @project.destroy
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
      :end_date,
      :pledge_goal,
      :complete
    )
  end
end
