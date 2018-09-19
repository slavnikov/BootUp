class Backing < ApplicationRecord
  validates :value, :user_id, :project_id, null: false

  belongs_to :user
  belongs_to :project
  belongs_to :reward, optional: true
end
