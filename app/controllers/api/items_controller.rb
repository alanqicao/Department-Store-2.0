class Api::ItemsController < ApplicationController
  before_action : set_department
  before_action :set_item, only: [:show, :update, :destroy]


  def create
    department = Department.find(params[:department_id])
    item = department.items.new(item_params)
    if item.save
      render json: item
    else
      render json: { erros: item.errors }
    end
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

  def set_department
    params.require(:dependent).permit(:name, :complete)
  end


end
