class Reward < ApplicationRecord
  validates :name, :description, :value, :project_id, presence: true

  belongs_to :project,
   foreign_key: :project_id,
   primary_key: :id,
   class_name: :Project
end
