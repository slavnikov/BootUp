class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.integer :admin_id, null: false
      t.string :title, null: false
      t.string :subtitle, null: false
      t.string :category, null: false
      t.string :sub_category
      t.string :country, null: false
      t.text :story, null: false
      t.date :end_date, null: false

      t.timestamps
    end
  end
end
