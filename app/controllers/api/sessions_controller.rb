class Api::SessionsController < ApplicationController

  def show
    if signed_in?
      @user = current_user
      render "api/users/show"
    else
      render json: { message: "Not logged in" }, status: 401
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )
    if @user
      sign_in!(@user)
      render "api/users/show"
    else
      render json: { message: "Invalid credentials" }, status: 401
    end
  end

  def destroy
    sign_out
    render json: {}
  end
end
