### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card)
    if card.value = 1 # == is the proper syntax for an equal to comparison in an if conditional. indentation and should use '_' between words in method name.
      return true
    else
      return false
    end
  end #indentation.

  dif highest_card(card1 card2) #'dif' should be 'def' as it is defining the method. Plus indentation. Also needs a comma.
  if card1.value > card2.value
    return card #variable name should be card1 as that is the name of the parameter and the if conditional.
  else
    return card2 #there could be a case for an equal value so another else would need to be added for if the card values are equal.
  end
end
end # one too many end statements. Will cause a syntax error.

def self.cards_total(cards)
  total # total should have a starting value as if not, it will be given a 'nil' value and will not be able to add the card.values to it. It also doesn't have to be a self method, as the cards class is not connected to the card game one.
  for card in cards
    total += card.value
    return "You have a total of" + total #string interpolation would be better here. The return should also be after the end of the for loop.
  end
end
```
