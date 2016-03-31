class Api::BackingsController < ApplicationController

  def create
    @backing = Backing.new(backing_params)

    if @backing.save
      render json: {}
    else
      render json: @backing.error.full_messages, status: 422
    end
  end

  private

  def backing_params
    params.require(:backing).permit(:reward_id, :user_id)
  end

end
