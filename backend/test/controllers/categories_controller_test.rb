require 'test_helper'

class CategoriesControllerTest < ActionDispatch::IntegrationTest
  test "should get api/v1" do
    get categories_api/v1_url
    assert_response :success
  end

end
