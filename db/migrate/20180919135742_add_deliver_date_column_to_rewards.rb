class AddDeliverDateColumnToRewards < ActiveRecord::Migration[5.2]
  def change
    add_column :rewards, :delivery_date, :date, null: false
  end
end
