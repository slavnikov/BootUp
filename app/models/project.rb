class Project < ApplicationRecord
  validates :admin_id, :subtitle, :category, :country, presence: true
  validates :title, uniqueness: true, allow_nil: true
end
