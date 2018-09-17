class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all

    render :index
  end
end
