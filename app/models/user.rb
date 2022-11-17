class User < ApplicationRecord
    has_secure_password

    has_many :events, :class_name => 'Organization' ,:foreign_key => "organizer_id"
    has_many :organizations, :class_name => 'Organization', :foreign_key => "organizer_id"
  
    has_many :events, through: :followed_events
    has_many :organizations, through: :followed_organizations

    has_many :followed_events, :class_name => 'EventFollow', :foreign_key => "follower_id"
    has_many :followed_organizations, :class_name => 'OrganizationFollow', :foreign_key => "follower_id"

    has_many :following_events, :class_name => 'EventFollow', :foreign_key => "event_id"
    has_many :following_organizations, :class_name => 'OrganizationFollow', :foreign_key => "organization_id"

    has_many :organizations, through: :following_organizations
    has_many :events, through: :following_events
    
    has_one_attached :profile_picture

    validates :email, presence: true

end
