class Organization < ApplicationRecord
    belongs_to :organizer, :class_name => "User"
    has_many :events, dependent: :destroy
end
