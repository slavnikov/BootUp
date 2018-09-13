class Api::SessionsController < ApplicationController
  def create()
    @user = User.find_by_credentials(params[:credentials][:email], params[:credentials][:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["The email address and password you entered do not match."], status: 422
    end
  end

  def destroy
    logout
  end
end
