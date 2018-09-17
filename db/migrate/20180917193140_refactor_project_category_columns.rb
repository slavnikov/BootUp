class RefactorProjectCategoryColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :category
    remove_column :projects, :category_id
    add_column :projects, :category_id, :integer, null: false
  end
end
