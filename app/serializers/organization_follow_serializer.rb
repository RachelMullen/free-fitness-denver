class OrganizationFollowSerializer < ActiveModel::Serializer
  attributes :id, :follower_id, :organization_id
end
