class OrganizationFollowSerializer < ActiveModel::Serializer
  attributes :id, :follower_id, :organization_id
  
  belongs_to :follower, :class_name => "User"
  belongs_to :organization
  
end
