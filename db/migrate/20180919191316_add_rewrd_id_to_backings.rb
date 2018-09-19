class AddRewrdIdToBackings < ActiveRecord::Migration[5.2]
  def change
    add_column :backings, :reward_id, :integer
  end
end
