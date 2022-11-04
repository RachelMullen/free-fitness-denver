class OrganizationFollow < ApplicationRecord
    belongs_to :follower, :class_name => "User"
    belongs_to :organization
end
