class PrescriptionsController < ApplicationController
  before_filter :intercept_html_requests
  layout false
  respond_to :json

  def prescription_params
      params.require(:prescription).permit(:user_id, :prescription_type, :sph, :cyl, :axis, :bc, :diam)
  end
  # GET /prescriptions
  # GET /prescriptions.json
  def index
    @prescriptions = Prescription.all
    render json: @prescriptions
  end

  # GET /prescriptions/1
  # GET /prescriptions/1.json
  def show
    @prescription = Prescription.find(params[:id])
    render json: @prescription
  end

  # GET /prescriptions/new
  # GET /prescriptions/new.json
  def new
    @prescription = Prescription.new
    render json: @prescription
  end

  # GET /prescriptions/1/edit
  def edit
    @prescription = Prescription.find(params[:id])
  end

  # POST /prescriptions
  # POST /prescriptions.json
  def create
    @prescription = @user.prescriptions.build(params[:prescription])

    respond_to do |format|
      if @prescription.save
        format.json { render json: @prescription, status: :created, location: @prescription }
      else
        format.json { render json: @prescription.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /prescriptions/1
  # PUT /prescriptions/1.json
  def update
    @prescription = Prescription.find(params[:id])

    respond_to do |format|
      if @prescription.update_attributes(params[:prescription])
        format.json { head :no_content }
      else
        format.json { render json: @prescription.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /prescriptions/1
  # DELETE /prescriptions/1.json
  def destroy
    @prescription = Prescription.find(params[:id])
    @prescription.destroy

    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
  def intercept_html_requests
    redirect_to('/') if request.format == Mime::HTML
  end
end
