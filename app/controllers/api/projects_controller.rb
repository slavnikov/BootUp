class Api::ProjectsController < ApplicationController

  def create
    unless logged_in?
      render json: [], status: 422
      return
    end

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

    unless logged_in? && @project.admin.id == current_user.id
      render json: [], status: 422
      return
    end

    if @project.update(project_params)
      @user = @project.admin

      render :show_payload
    else
      errors = []
      @project.errors.full_messages.each do |error|
        if error == "Title has already been taken"
          errors << "There is already a project with that name. Please pick another."
        end
      end
      render json: errors, status: 422
    end
  end

  def index
    @projects = Project.with_attached_image.where(complete: true).includes('admin', 'backings')

    render :index
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

    if logged_in? && current_user.id == @project.admin.id
      @project.destroy
      render :show
    else
      render json: [], status: 422
    end
  end

  private

  def project_params
    params.require(:project).permit(
      :admin_id,
      :title,
      :subtitle,
      :category_id,
      :sub_category,
      :country,
      :story,
      :end_date,
      :pledge_goal,
      :image,
      :complete
    )
  end
end
