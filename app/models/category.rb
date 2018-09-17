class Category < ApplicationRecord
  validates :name, presence: true

  # has_many :projects,
  #   foreign_key: :category_id,
  #   primary_key: :id,
  #   class_name: :Project
end
