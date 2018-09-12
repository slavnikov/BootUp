class AddIndexingToProjectTitle < ActiveRecord::Migration[5.2]
  def change
    add_index :projects, :title, unique: true
  end
end
