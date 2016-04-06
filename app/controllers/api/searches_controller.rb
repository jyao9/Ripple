class Api::SearchesController < ApplicationController

  def index
    @search_results = PgSearch
      .multisearch(params[:query])
    render :index
  end

end
