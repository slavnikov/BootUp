if project
  json.extract! project, :id, :admin_id, :title, :subtitle, :category_id, :sub_category, :country, :story, :end_date, :pledge_goal, :complete
  json.percentComplete project.percentage_complete
  json.totalRaised project.total_raised
  json.totalBackers project.total_backers
  if project.image.attached?
    json.imageUrl url_for(project.image)
  end
else
  {}
end
