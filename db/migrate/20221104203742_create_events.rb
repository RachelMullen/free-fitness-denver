class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.integer :organization_id
      t.string :attachment
      t.string :location_name
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :date
      t.string :time
      t.string :description
      t.string :announcements
      t.string :link
      t.string :difficulty_distance
      t.string :category
      t.string :social_media

      t.timestamps
    end
  end
end
