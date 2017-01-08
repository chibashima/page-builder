Rails.application.routes.draw do
  root 'page#index'
  resources :page, only: :index
  namespace :api do
    post :page, controller: :page, action: :save
  end
end
