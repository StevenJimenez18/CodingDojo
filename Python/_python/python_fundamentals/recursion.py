import sys

print(sys.getrecursionlimit())

def fact(n):
    if n == 0:
        return 1
    
    return n * fact(n-1)

print(fact(5))


def sigma(n):
    if n == 0:
        return 0
    return n + sigma(n-1)

print(sigma(4))

def fib(n):
    if n <= 0:
        print("Value must be greater than zero")
    elif n == 1:
        return 1
    elif n == 2:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print(fib(4))

#0 1 1 2 3 5 8

# Write a recursive function that returns the greatest common factor between two numbers
# Ex: given GCF(12,15) -> return 3
# Hints:
# gcf(a,b) == return a, if a == b
# gcf(a,b) == return gcf(a-b,b) if a > b
# gcf(a,b) == return gcf(a,b-a) if b > a


def GCF(a,b):

    if b == 0:
        return a
    else:
        return GCF(b, a % b)

print(GCF(12,15))



def GCF(a,b):

    if a==b:
        return a

    elif a > b:
        return GCF(a-b,b)

    elif b > a:
        return GCF(a,b-a)

print(GCF(12,65))



