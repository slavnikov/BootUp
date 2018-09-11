class Api::SessionsController < ApplicationController
  def create(email, password)
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

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
