def total_backers(project)
  project.backings.length
end

def total_raised(project)
  project.backings.inject(0) {|total, backing| total += backing.value}
end

def percentage_complete(project)
  if project.pledge_goal > 0
    ((total_raised(project) / project.pledge_goal.to_f) * 100).round
  else
    0
  end
end

if project
  json.extract! project, :id, :admin_id, :title, :subtitle, :category_id, :sub_category, :country, :story, :end_date, :pledge_goal, :complete
  json.percentComplete percentage_complete(project)
  json.totalRaised total_raised(project)
  json.totalBackers total_backers(project)
  if project.image.attached?
    json.imageUrl url_for(project.image)
  end
else
  {}
end
