class AllowNilProjectTitles < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :title
    add_column :projects, :title, :string
  end
end
