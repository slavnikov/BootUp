class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render :show
    else
      render json: ["Invalid user credenitals provided."], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :biography, :location, :timezone_utc_offset)
  end
end
