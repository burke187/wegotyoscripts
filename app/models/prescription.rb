class Prescription < ActiveRecord::Base
  attr_accessible :user_id, :prescription_type, :sph, :cyl, :axis, :bc, :diam

  validates :user_id, :numericality => { only_integer: true }
  # validates :sph, :greater_than_or_equal_to => -10.0, :less_than_or_equal_to => 10.0 
  # validates :cyl, :greater_than_or_equal_to => -10.0, :less_than_or_equal_to => 10.0
  # validate :point_two_five_increments

  # 	def point_two_five_increments
  # 	    unless sph && cyl % 0.25 == 0
  # 	        errors.add(:sph, "SPH and CYL must be in 0.25 increments")
  # 	    end
  # 	end

  validates :axis, :numericality => { only_integer: true }#,
  # 			:greater_than_or_equal_to => 0,
  #   		:less_than_or_equal_to => 180
  # validates :bc, :greater_than_or_equal_to => 7.0, :less_than_or_equal_to => 9.0
  # validates :diam, :greater_than_or_equal_to => 13.0, :less_than_or_equal_to => 15.0
  # validate :point_one_increments

  # 	def point_one_increments
  # 	    unless bc && diam % 0.1 == 0
  # 	        errors.add(:sph, "BC and DIAM must be in 0.1 increments")
  # 	    end
  # 	end

  belongs_to :user
  validates :user, presence: true

end
