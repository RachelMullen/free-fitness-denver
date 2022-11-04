class CreateOrganizations < ActiveRecord::Migration[7.0]
  def change
    create_table :organizations do |t|
      t.string :name
      t.integer :organizer_id
      t.string :attachment
      t.string :description
      t.string :announcements
      t.string :link
      t.string :social_media

      t.timestamps
    end
  end
end
