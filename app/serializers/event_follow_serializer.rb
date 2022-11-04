class EventFollowSerializer < ActiveModel::Serializer
  attributes :id, :follower_id, :event_id
end
