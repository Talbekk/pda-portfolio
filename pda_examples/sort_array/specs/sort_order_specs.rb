require( 'minitest/autorun' )
require( 'minitest/rg' )
require_relative( '../sort_order.rb' )

class FunctionsTest < MiniTest::Test


  def test_sort_ascending()
    array = [3, 2, 1, 4]
    result = return_ascending(array)
    assert_equal( [1, 2, 3, 4], result )
  end

end
