Heuristx::Application.routes.draw do
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get :short
  #       post :toggle
  #     end
  #
  #     collection do
  #       get :sold
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get :recent, :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => "welcome#index"

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'

  # home_controller routes
  match '/portfolio' => 'home#index', :as => :portfolio, :via => :get
  match '/' => 'home#home', :as => :home, :via => :get
  match '/features' => 'home#features', :as => :features, :via => :get
  match '/content-page' => 'home#content', :as => :content, :via => :get
  match '/what-is-it' => 'home#what_is_it', :via => :get
  match '/what-is-it/:question' => 'home#what_is_it', :as => :what_is_it, :via => :get
  match '/ajax-tabs/:tab' => 'home#tabs', :as => :tabs, :via => :get
  match '/pricing' => 'home#pricing', :as => :pricing, :via => :get
  match '/content-modal/:content' => 'home#content_modal', :as => :content_modal, :via => :get
  

  # redirect_controller routes
  #match '/' => 'redirect#index', :as => :main, :via => :get
  
  root :to => "home#home"
end
