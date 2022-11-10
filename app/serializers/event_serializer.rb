class EventSerializer < ActiveModel::Serializer
  # include Rails.application.routes.url_helpers
  attributes :id, :organization_id, :attachment, :location_name, :address, :city, :state, :zip, :date, :time, :description, :announcements, :link, :difficulty_distance, :category, :social_media, :name

  belongs_to :organization

  # def attachment
  #   rails_blob_path(object.attachment, only_path: true) if object.attachment.attached?
  # end

end
