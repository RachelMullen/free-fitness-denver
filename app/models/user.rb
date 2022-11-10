class User < ApplicationRecord
    has_many :organizations, :class_name => 'Organization', :foreign_key => 'organizer_id'
    has_many :event_follows, :class_name => 'EventFollow', :foreign_key => 'follower_id'
    has_many :organization_follows, :class_name => 'OrganizationFollow', :foreign_key => 'follower_id'
    has_many :events, through: :event_follows
    has_many :organizations, through: :organization_follows
    has_one_attached :profile_picture
    
    has_secure_password

    validates :email, presence: true
    # validates :password, presence: true

end
