class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.text :biography
      t.string :location
      t.integer :timezone_utc_offset

      t.timestamps
    end
  end
end
