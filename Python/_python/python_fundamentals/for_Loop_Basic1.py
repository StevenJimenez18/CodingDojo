#Multiples of Five
for i in range(0, 1005, +5):
    print(i)

#Counting, the Dojo Way
for i in range(101):
    print(i)
    if i % 5 == 0 and i % 10 != 0:
        print("Coding")
    elif i % 10 == 0:
        print("Coding Dojo")

#Whoa. That Sucker's Huge
counterodd = 0 #counter
countereven = 0
for x in range(0,500001,1): #for i in range(500001)
    if x % 2 != 0: 
        countereven = countereven +  # add odd number to sum
    elif x % 2 == 1: 
        counterodd = counterodd + x # add odd number to sum
print(countereven)
print(counterodd)

# Countdown by Fours
for i in range(2018, 0, -4):
    if i > 0:
        print(i)
    else: 
        break

#Flexible Counter

lowNum = 2
highNum = 9
mult = 3
for i in range(lowNum, highNum+1):
    if i % mult == 0:
        print(i)




def sum_total():
    sumfunction = 0
    for x in range(500001):
        if x % 2 !=0:
            sum += x
    return sum
print(sum_total())

#outside
#outside
def sum_total():
    sumfunction = 0
    for x in range(500001):
        if x % 2 !=0:
            sum += x
    return sum
print(sum_total())


sum = 0
for x in range(500001):
    if x % 2 !=0:
        sum += x
print(sum)
