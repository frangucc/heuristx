module ApplicationHelper
  
  def active_link_class(nav_item, active_nav_item)
    return "active" if nav_item == active_nav_item
    return ""
  end
  
end
