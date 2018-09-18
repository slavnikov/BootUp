@projects.each do |project|
  json.set! 'projects' do
    json.set! project.id do
      json.partial! '/api/projects/project.json.jbuilder', project: project
    end
  end

  json.set! 'users' do
    json.set! project.admin.id do
      json.partial! '/api/users/user.json.jbuilder', user: project.admin
    end
  end
end
