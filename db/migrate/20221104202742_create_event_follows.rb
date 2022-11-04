class CreateEventFollows < ActiveRecord::Migration[7.0]
  def change
    create_table :event_follows do |t|
      t.integer :follower_id
      t.integer :event_id

      t.timestamps
    end
  end
end
