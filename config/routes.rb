Rails.application.routes.draw do

  resources :organizations do
  # nested resource for events and organizers
    resources :events
    resources :organizer
  end

  resources :organization_follows 
  resources :events 
  resources :event_follows 
  resources :users 

  # AUTHENTICATION/AUTHORIZATION ROUTES
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #PROFILE
  patch "/profile/:id", to: "users#update"
  get "/profile/:id", to: "users#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end