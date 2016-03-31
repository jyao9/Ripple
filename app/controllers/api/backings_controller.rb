class Api::BackingsController < ApplicationController

  def index
    @backings = Backing.all
    render :index
  end

  def create
    @backing = Backing.new(backing_params)

    if @backing.save
      render :index
    else
      render json: @backing.error.full_messages, status: 422
    end
  end

  private

  def backing_params
    params.require(:backing).permit(:reward_id, :user_id)
  end

end
