Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :projects, only: [:index, :create, :show, :update] do
      resources :rewards, only: [:index, :create]
      resources :backings, only: [:create]
    end
    resources :users, only: [:show, :create]
    resource :session, only: [:show, :create, :destroy]
    resources :searches, only: [:index]
  end

  get "auth/facebook/callback", to: "omniauth#facebook"
end
