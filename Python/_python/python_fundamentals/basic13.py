# Countdown
# Create a function that accepts a number as an input. Return a new array that counts down by one, from
# the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

def countdown(num):
    for i in range(num, -1):
       print(num)
print(countdown(10))

