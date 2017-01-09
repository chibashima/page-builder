Rails.application.routes.draw do
  resources :users, only: :index
  root 'users#index'
  post '/users/login', controller: :users, action: :login
  resources :pages, only: :index
  namespace :api do
    post :page, controller: :page, action: :save
    get :page, controller: :page, action: :show
  end
end
