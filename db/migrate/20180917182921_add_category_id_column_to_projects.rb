class AddCategoryIdColumnToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :category_id, :integer
  end
end
