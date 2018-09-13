class AddPlegeGoalColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :pledge_goal, :integer
  end
end
