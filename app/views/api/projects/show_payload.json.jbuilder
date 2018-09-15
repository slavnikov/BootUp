json.set! 'project' do
  json.partial! '/api/projects/project.json.jbuilder', project: @project
end

json.set! 'user' do
  json.partial! '/api/users/user.json.jbuilder', user: @user
end
