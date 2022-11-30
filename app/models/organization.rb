class Organization < ApplicationRecord
    
    belongs_to :organizer, :class_name => "User"
    has_many :events, dependent: :destroy
    has_many :followers, :class_name => 'OrganizationFollow', :foreign_key => 'follower_id'
    
    has_one_attached :organization_photo

    validates :name, presence: true
end
