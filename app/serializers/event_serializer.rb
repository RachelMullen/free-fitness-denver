class EventSerializer < ActiveModel::Serializer
  attributes :id, :organization_id, :attachment, :location_name, :address, :city, :state, :zip, :date, :time, :description, :announcements, :link, :difficulty_distance, :category, :social_media

  belongs_to :organization

end
