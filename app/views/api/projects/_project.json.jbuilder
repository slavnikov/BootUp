if project
  json.extract! project, :id, :admin_id, :title, :subtitle, :category, :sub_category, :country, :story, :end_date, :pledge_goal
else
  {}
end
