import random
def randInt(min = 0,max = 100):
    if min == 0 and max == 100:
        num = random.random()
        return num
    elif min == 0 and max != 100:
        num = random.random() * max
        return num
    elif min != 0 and max == 100:
        num = random.random() * min
        return num
    elif min != 0 and max != 100:
        num = random.random() * min + max
        return num
print(randInt())
print(randInt(max=50))
print(randInt(min=50))
print(randInt(min=50, max=500)) 