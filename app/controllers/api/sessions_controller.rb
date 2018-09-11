class Api::SessionsController < ApplicationController
  def create()
    @user = User.find_by_credentials(params[:credentials][:email], params[:credentials][:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid user credential."], status: 422
    end
  end

  def delete
    logout
  end
end
