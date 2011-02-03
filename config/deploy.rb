require 'capistrano/ext/multistage'
require 'bundler/capistrano'
require 'yaml'

set :stages, [:production]
set :default_stage, :production

set :application, "heuristx"
set :repository,  "git@github.com:frangucc/heuristx.git"

set :scm, :git

set :user, "deploy"
set :use_sudo, false

default_run_options[:pty] = true

ssh_options[:keys] = [File.join(ENV['HOME'],'.ssh','id_rsa')]

set :deploy_to, "/var/www/rails_apps/#{ application }"
#set :deploy_via, :remote_cache


namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end
end
