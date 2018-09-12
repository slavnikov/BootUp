class Project < ApplicationRecord
  validates :admin_id, :subtitle, :category, :country, :story, :end_date, presence: true
  validates :title, presence: true, uniqueness: true
end
