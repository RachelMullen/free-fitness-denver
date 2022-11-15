class Event < ApplicationRecord

    belongs_to :organization
    has_one :organizer, :class_name => "Organization", :foreign_key  => 'organizer_id'
    has_many :followers, :class_name => 'EventFollow', :foreign_key => 'follower_id'
    # has_one_attached :attachment

    validates :name, presence: true
    
end
