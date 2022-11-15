class OrganizationFollow < ApplicationRecord

    belongs_to :follower, :class_name => "User"
    belongs_to :organization
    
    validates :follower_id, uniqueness: { scope: :organization_id }
    validates :organization_id, uniqueness: { scope: :follower_id }

end
