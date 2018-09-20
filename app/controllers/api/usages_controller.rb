class Api::UsagesController < ApplicationController
  def show
    @data = {
      user_count: User.count,
      active_projects: Project.count,
      backings: Backing.count,
    }

    return :show
  end
end
