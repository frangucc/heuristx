class HomeController < ApplicationController
  
  def index
  end
  
  def features
  end
  
  def home
  end
  
  def portfolio
  end
  
  def content
  end
  
  def what_is_it
    @display_page = case params[:question]
      when "home" , :what_is_it
      when "how-does-it-work" then :how_does_it_work
      when "how-do-i-use-it" then :how_do_i_use_it
      when "what-are-perks" then :what_are_perks
      when "what-is-the-technology" then :what_is_the_technology
      when "customer-experience" then :customer_experience
      when "can-i-see-a-sample" then :can_i_see_a_sample
    end || false
    @display_page = :what_is_it unless @display_page
  end
  
  def tabs
    @display_page = case params[:tab]
      when "chatyeo" then :chatyeo
      when "baseprice" then :baseprice
      when "dillyeo" then :dillyeo
      when "crg" then :crg
      when "buckfiddy" then :buckfiddy
      when "homelifeperks" then :homelifeperks
      when "rtwo" then :rtwo
      when "spot" then :spot
      when "townclique" then :townclique
      when "activeradius" then :activeradius
      when "trendlevel" then :trendlevel
      when "defyned" then :defyned
        
    end || false
    render :text => "<p>Error loading content for #{params[:tab].to_s}.</p>", :layout => false unless @display_page
    render :partial => "home/tab_pages/tab_#{@display_page.to_s}", :layout => false if @display_page
  end
  
  def pricing
  end
  
  def content_modal
    # first value is what comes from the browser, the second is the name of the partial that we relate the 
    # path with to display it's content
    # example:
    # when "<url>" : :partial_file_name_in_content_modal_folder
    @display_page = case params[:content]
      when "coffee-table-memoirs" then :coffee_table_memoirs
      when "time-to-change" then :time_to_change
    end || false
    render :text => "<p>Error loading content for #{params[:content].to_s}.</p>", :layout => false unless @display_page
    render :partial => "home/content_modal/#{@display_page.to_s}", :layout => false if @display_page
  end  
  
end
