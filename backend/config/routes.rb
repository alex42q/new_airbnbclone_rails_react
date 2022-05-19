Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/ads', to: 'ads#findallads'
      get '/ads/:slug', to: 'ads#showOneAd'
      get '/ad/bycategory/:id', to: 'ads#findAdsByCategory'
      post '/ads/create', to: 'ads#addNewAd'
      get '/categories', to: 'categories#getAllCategories'
      get '/categories/ads/:id', to: 'categories#getAllAdsByCategory'
      post '/categories/create', to: 'categories#createNewCategory'
    end
  end
end
