class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    department = Department.find(params[:dependent_id])
    render json: department.items
  end


  def create
    department = Department.find(params[:department_id])
    render json: department.items.create(item_params)
  end


  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors,status: 422
    end
  end

  def destroy
    @item.destroy
  end

  

  private

  def item_params
    params.require(:item).permit(:name, :price)
  end

  def set_item
    @item = Item.find(params[:id])
  end

 


end
