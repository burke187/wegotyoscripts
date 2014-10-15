class User < ActiveRecord::Base
  attr_accessible :username, :password

  validates :username, presence: true, uniqueness: { case_sensitive: false }
  
  validates :password, :presence => true, on: :create
  validates :password, length: { minimum: 6 , message: "Password needs to be at least 6 characters" }, on: :create

  has_many :prescriptions, dependent: :destroy
  # validates_associated :prescriptions

  has_secure_password
end