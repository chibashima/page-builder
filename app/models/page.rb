class Page < ApplicationRecord
  belongs_to :user
  has_one :part
end
