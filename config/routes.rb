Rails.application.routes.draw do

  resources :organizations
  resources :organization_follows, only: [:create, :destroy]
  resources :events 
  resources :event_follows 
  resources :users

  # AUTHENTICATION/AUTHORIZATION ROUTES
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '/organization_follows/:follower_id', to: "organization_follows#get_followed_organizations"

  # get "/profile/:id", to: "users#user_organizations"

  # post '/organization/:user_id', to: 'follows#create'
  # delete '/follow/:user_id', to: 'follows#destroy'

  #PROFILE
  patch "/profile/:id", to: "users#update"
  get "/profile/:id", to: "users#destroy"
  # get "profile", to: "users#show"

  post "/organizations/new", to: "organizations#create"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      get '/', to: 'fallback#index'

end