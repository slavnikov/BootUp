# json.extract! @user, :id, :name, :email

json.set! 'user' do
  json.partial! '/api/users/user.json.jbuilder', user: @user
end

json.set! 'projects' do
  @projects.each do |project|
    json.set! project.id do
      json.partial! '/api/projects/project.json.jbuilder', project: project
    end
  end
end
