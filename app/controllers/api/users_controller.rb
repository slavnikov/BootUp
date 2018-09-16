class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      @projects = @user.projects
      
      render :show
    else
      errors = []
      @user.errors.full_messages.each do |error|
        if error == "Email has already been taken"
          errors << "This email is already registered with an account."
        end
        if error == "Password is too short (minimum is 6 characters)"
          errors << "The password must be at least 6 characters long."
        end
      end
      render json: errors, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render :show
    else
      render json: ["Email and password do not match."], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :biography, :location, :timezone_utc_offset)
  end
end
