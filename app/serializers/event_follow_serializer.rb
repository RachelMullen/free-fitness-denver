class EventFollowSerializer < ActiveModel::Serializer
  attributes :id, :follower_id, :event_id
  belongs_to :follower, :class_name => "User"
  belongs_to :event
end
