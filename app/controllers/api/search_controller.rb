class Api::SearchController < ApplicationController
  def show
    pattern = params[:id]
    @results = Project.where("lower (title) like ?", "%#{pattern}%")

    render :show
  end
end
