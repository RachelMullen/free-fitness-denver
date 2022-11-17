class OrganizationFollowSerializer < ActiveModel::Serializer
  attributes :id, :organization_id
  #:follower_id
  # belongs_to :follower, :class_name => "User"
  belongs_to :organization
  
end
