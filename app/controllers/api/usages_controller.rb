class Api::UsagesController < ApplicationController
  def show
    @data = {
      user_count: User.count,
      active_projects: Project.count,
      live_projects: Project.where(complete: true).count
    }

    return :show
  end
end
