Rails.application.routes.draw do
  resources :organizations do
    resources :events
    resources :organizer
  end
  resources :organization_follows do
    resources :organization
    resources :follower
  end
  resources :events do
    resources :organization
    resources :organizer
  end
  resources :event_follows do
    resources :event
    resources :follower
  end
  resources :users do
    resources :event_follows
    resources :events
    resources :organization_follows
    resource  :organizations
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # AUTHENTICATION/AUTHORIZATION ROUTES
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

#PROFILE
get "/profile/:id", to: "users#destroy"
patch "/profile/:id", to: "users#update"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end