role :web, "appsbyrequest.com"                          # Your HTTP server, Apache/etc
role :app, "appsbyrequest.com"                          # This may be the same as your `Web` server
role :db,  "appsbyrequest.com", :primary => true # This is where Rails migrations will run
