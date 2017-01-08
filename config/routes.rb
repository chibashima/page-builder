Rails.application.routes.draw do
  resources :users
  resources :parts
  resources :pages
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
