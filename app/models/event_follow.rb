class EventFollow < ApplicationRecord
    belongs_to :follower, :class_name => "User"
    belongs_to :event
end
