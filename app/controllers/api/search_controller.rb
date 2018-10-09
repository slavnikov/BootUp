class Api::SearchController < ApplicationController
  def show
    pattern = params[:id]
    @projects = Project.where("lower (title) like ?", "%#{pattern}%").with_attached_image.where(complete: true).includes('admin', 'backings')

    render '/api/projects/index.json.jbuilder'
  end
end
