class Project < ApplicationRecord
  validates :admin_id, :subtitle, :category_id, :country, presence: true
  validates :title, uniqueness: true, allow_nil: true

  has_one_attached :image

  belongs_to :admin,
    foreign_key: :admin_id,
    primary_key: :id,
    class_name: :User

  belongs_to :category,
    foreign_key: :category_id,
    primary_key: :id,
    class_name: :Category
end
