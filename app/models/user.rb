class User < ApplicationRecord
  has_one :page

  validates :name, uniqueness: true
end
