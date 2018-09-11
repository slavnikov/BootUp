class ApplicationController < ActionController::Base

  helper_method :current_user

  def current_user
    User.find_by(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token
    debugger
  end

  def logout
    debugger
    current_user.reset_session_token
    session[:session_token] = nil
  end
end
