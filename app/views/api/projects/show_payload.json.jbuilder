rewards = @project.rewards

json.set! 'project' do
  json.partial! '/api/projects/project.json.jbuilder', project: @project
end

json.set! 'user' do
  json.partial! '/api/users/user.json.jbuilder', user: @user
end

json.set! 'rewards' do
  rewards.each do |reward|
    json.set! reward.id do
      json.partial! '/api/rewards/reward.json.jbuilder', reward: reward
    end
  end
end
