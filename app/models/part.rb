class Part < ApplicationRecord
  belongs_to :page

  validates :contents, presence: true
end
