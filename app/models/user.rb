class User < ApplicationRecord
  has_many :page

  validates :name, presence: true, uniqueness: true, no_space: true
end
