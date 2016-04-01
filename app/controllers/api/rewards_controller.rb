class Api::RewardsController < ApplicationController

  def index
    @rewards = Reward.all.where(project_id: params[:project_id].to_i)
    render :index
  end

  def create
    @reward = Reward.new(reward_params)

    if @reward.save
      render :index
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  private

  def reward_params
    params.require(:reward).permit(:project_id, :value, :description)
  end

end
