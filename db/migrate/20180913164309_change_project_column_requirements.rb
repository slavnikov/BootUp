class ChangeProjectColumnRequirements < ActiveRecord::Migration[5.2]
  def change
    change_column :projects, :title, :string, null: true
    change_column :projects, :story, :text, null: true
    change_column :projects, :end_date, :date, null: true
    add_column :projects, :complete, :boolean, default: false
  end
end
