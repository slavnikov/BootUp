class CreateBackings < ActiveRecord::Migration[5.2]
  def change
    create_table :backings do |t|
      t.integer :user_id, null: false
      t.integer :project_id, null: false
      t.integer :value, null: false

      t.timestamps
    end
  end
end
