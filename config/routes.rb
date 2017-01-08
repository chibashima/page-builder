Rails.application.routes.draw do
  resources :users
  resources :parts
  resources :pages
  namespace :api do
    post :page, controller: :page, action: :save
  end
end
