require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class CardGameTest < MiniTest::Test

def setup
  @cardgame = CardGame.new()

  @card1 = Card.new("hearts", 2)
  @card2 = Card.new("spades", 1)

  @cards = [@card1, @card2]
end


def test_check_for_ace__true()
  assert_equal(true, @cardgame.check_for_ace(@card2))
end

def test_checkforAce__false()
  assert_equal(false, @cardgame.check_for_ace(@card1))
end

def test_highest_card()
  assert_equal(@card1, @cardgame.highest_card(@card1, @card2))
end

def test_cards_total()
  assert_equal("You have a total of 3", @cardgame.cards_total(@cards))
end

end
