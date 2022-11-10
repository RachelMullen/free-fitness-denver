class OrganizationFollowSerializer < ActiveModel::Serializer
  belongs_to :follower, :class_name => "User"
  belongs_to :organization
  attributes :id, :follower_id, :organization_id
end
