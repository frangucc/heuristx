require 'capistrano/ext/multistage'
require 'bundler/capistrano'
require 'yaml'

set :stages, [:production]
set :default_stage, :production

set :application, "heuristx"
set :repository,  "git@github.com:frangucc/heuristx.git"

set :scm, :git

role :web, "heuristx.com"                          # Your HTTP server, Apache/etc
role :app, "heuristx.com"                          # This may be the same as your `Web` server
role :db,  "", :primary => true # This is where Rails migrations will run

set :user, "deploy"
set :use_sudo, false

set :deploy_to, "/var/www/rails_apps/#{ app_name }"


namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end
end
