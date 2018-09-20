Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:create, :update, :destroy, :show, :index]
    resources :categories, only: [:index, :show]
    resources :rewards, only: [:create, :update, :destroy]
    resources :search, only: :show
    resources :backings, only: :create
    resource :usage, only: :show
  end
end
