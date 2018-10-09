class Api::SearchController < ApplicationController
  def show
    pattern = params[:id]
    @projects = Project.where("lower (title) like ?", "%#{pattern}%")

    render '/api/projects/index.json.jbuilder'
  end
end
