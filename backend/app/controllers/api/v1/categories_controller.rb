class Api::V1::CategoriesController < ApplicationController
    skip_before_action :verify_authenticity_token  

    def getAllCategories
        @categories = Category.all
        render json:{
            data:@categories
        }
    end

    def getAllAdsByCategory
        @categories = Category.find_by_id(params[:id])
        if @categories
            render json:{
                data: @categories
            }, status: 200
        else
            render json:{
                error:"Error not found!"
            }, status: 404
        end
    end

    def createNewCategory
        @categories = Category.new(category_params)
        if @categories.save
            render json:{
                data: @categories
            }, status: 201
        else
            render json:{
                error:"Error on creation, please try again"
            }, status: 401
        end
    end 

    private
    def category_params
        params.require(:category).permit(:name, :slug, :icon)
    end
end
