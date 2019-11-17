class Card
  attr_reader :suit, :value

  def initialize(suit, value)
    @suit = suit
    @value = value.to_i #no semi-colon, also .to_i
  end

end
