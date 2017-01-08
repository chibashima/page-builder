class CreateParts < ActiveRecord::Migration[5.0]
  def change
    create_table :parts do |t|
      t.integer :page_id
      t.json :contents

      t.timestamps
    end
  end
end
