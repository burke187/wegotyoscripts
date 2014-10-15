class CreatePrescriptions < ActiveRecord::Migration
  def change
    create_table :prescriptions do |t|
    	t.integer :user_id
    	t.string :prescription_type
		t.float :sph
		t.float :cyl
		t.integer :axis
		t.float :bc
		t.float :diam
  
      t.timestamps
    end
  end
end
