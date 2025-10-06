class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    if(amount > 0) {
      this.balance += amount;
    } else {
      console.log('Error: deposit amount must be positive');
    }
  }

  withdraw(amount) {
    if(amount > this.balance) {
      console.log('Error: insufficient funds');
    } else if(amount <= 0) {
      console.log('Error: withdrawal amount must be positive');
    } else {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); 

account1.deposit(500);
console.log(account1.getBalance()); 

account1.withdraw(200);
console.log(account1.getBalance()); 
