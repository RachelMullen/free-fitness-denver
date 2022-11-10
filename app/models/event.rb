class Event < ApplicationRecord
    belongs_to :organization
    # has_one_attached :attachment

    validates :name, presence: true
end
