class CreateAds < ActiveRecord::Migration[5.2]
  def change
    create_table :ads do |t|
      t.string :name
      t.string :slug
      t.string :baseimage
      t.text :images, array: true, default: []

      t.timestamps
    end
  end
end
