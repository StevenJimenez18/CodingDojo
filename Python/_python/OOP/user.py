class User:
    def __init__(self,name,email):
        self.name = name
        self.email = email
        self.account = bankAccount(int_rate=0.02, balance=0)
    # adding the deposit method
    def make_deposit(self, amount):
        self.account += amount
        print(f"You made a deposit of ${amount}")
        return self
    def make_withdrawal(self, amount):
        self.account -= amount
        print(f"You made a withdrawal of ${amount}")
        return self
    def display_balance(self):
        print(f"Hello {self.name}, Your balance is ${self.account}")
        return self
    def transfer_balance(self, amount, account):
        self.make_withdrawal(500)
        account.account += amount
        print(f"Hello {self.name}, You transfered ${500} to {account.name}")
        return self


class bankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = 0.05
        self.account_balance = 0
    def deposit(self,amount):
        self.account_balance += amount
        print(f"You made a deposit of ${amount}")
        return self
    def withdrawal(self, amount):
        self.account_balance -= amount
        print(f"You made a withdrawal of ${amount}")
        if self.account_balance < 0:
            print("Insuffiecnt funds. A $5 charge has been added.")
            self.account_balance - 5
        return self
    def display_account_info(self):
        print(f"Your balance is ${self.account_balance}")
        return self
    def yield_interest(self):
        if self.account_balance > 1:
            self.account_balance += self.account_balance * self.int_rate
        return self
guido = bankAccount(0.05, 100)
guido.deposit(100).deposit(100).deposit(100).withdrawal(50).yield_interest().display_account_info()

guido = User("guido", "yourboyguido@gmail.com")
guido.make_deposit(500).make_deposit(500).make_deposit(500).make_withdrawal(500).display_balance()


monty = bankAccount(0.01, 100)
monty.deposit(200).deposit(900).withdrawal(120).withdrawal(45).withdrawal(45).withdrawal(38).yield_interest().display_account_info()

monty = User("monty", "montythemighty@gmail.com")
monty.make_deposit(500).make_deposit(500).make_withdrawal(500).make_withdrawal(500).display_balance()



Steven = User("Steven", "nunya@gmail.com")
Steven.make_deposit(500).make_withdrawal(500).make_withdrawal(500).make_withdrawal(500).display_balance()
guido.transfer_balance(1000,Steven).display_balance()
Steven.display_balance()

