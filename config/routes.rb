Rails.application.routes.draw do
   root to: 'static_pages#root'

   namespace :api, defaults: {format: :json} do
     resources :projects, only: [:index, :create, :show, :update]
     resources :users, only: [:show, :create]
     resource :session, only: [:show, :create, :destroy]
     resources :rewards, only: [:index, :create]
     resources :backings, only: [:index, :create]
   end
end
