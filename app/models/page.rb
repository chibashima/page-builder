class Page < ApplicationRecord
  belongs_to :user
  has_one :part

  validates :name, presence: true, no_space: true
end
