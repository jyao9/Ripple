Rails.application.routes.draw do
   root to: 'static_pages#root'

   namespace :api, defaults: {format: :json} do
     resources :projects, only: [:index, :create, :new, :show, :update]
   end
end
