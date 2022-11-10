class Organization < ApplicationRecord
    belongs_to :organizer, :class_name => "User"
    has_many :events, dependent: :destroy
    # has_one_attached :attachment

    validates :name, presence: true
end
