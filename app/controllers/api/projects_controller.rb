class Api::ProjectsController < ApplicationController

  before_action :require_signed_in, only: [:create, :update]

  def index
    if params[:category] != nil
      @projects = Project.all.where("projects.category = ?", params[:category])
      render :index
    else
      @projects = Project.all
      render :index
    end
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def create
    @project = Project.new(project_params)
    @project.author_id = current_user.id
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])

    if @project.update_attributes(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render :show
  end


  private

  def project_params
    params.require(:project).permit(
      :title, :category, :blurb, :duration, :goal, :image
    )
  end

end
