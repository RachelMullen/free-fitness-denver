class EventFollow < ApplicationRecord

    belongs_to :follower, :class_name => "User"
    belongs_to :event

    validates :follower_id, uniqueness: { scope: :event_id }
    validates :event_id, uniqueness: { scope: :follower_id }
    
end
