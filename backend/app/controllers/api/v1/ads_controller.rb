class Api::V1::AdsController < ApplicationController
    skip_before_action :verify_authenticity_token  

    def findAdsByCategory
        @ads = Ad.where(category_id: params[:id])
        if @ads
            render json:{
                data: @ads
            }, status: 200
        else
            render json:{
                error:"Error not found!"
            }, status: 404
        end
    end

    def findallads
        @Ads = Ad.all
        render json: {
            data: @Ads
        }
    end

    def addNewAd
        @ads = Ad.new(ads_params)
        if @ads.save
            render json:{
                data: @ads
            }, status: 201
        else
            render json:{
                error:"Error"
            }, status: 401
        end
    end

    def showOneAd
        @ads = Ad.find_by_slug(params[:slug])
        if @ads
            render json:{
                data: @ads
            }, status: 200
        else
            render json:{
                error:"Error not found!"
            }, status: 404
        end
    end



    private
    def ads_params
        params.require(:ad).permit(:name, :slug, :category_id, :images=>[])
    end

    def one_params
        params.require(:ad).permit(:id)
    end
end
