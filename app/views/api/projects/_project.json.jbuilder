if project
  json.extract! project, :id, :admin_id, :title, :subtitle, :category_id, :sub_category, :country, :story, :end_date, :pledge_goal, :complete
  if project.image.attached?
    json.imageUrl url_for(project.image)
  end
else
  {}
end
