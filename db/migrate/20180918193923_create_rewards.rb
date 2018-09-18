class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :value, null: false
      t.integer :project_id, null: false

      t.timestamps
    end
  end
end
