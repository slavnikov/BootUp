class AddCurrentProjectColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :current_project_id, :integer
  end
end
