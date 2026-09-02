class InsufficientFundsError extends Error {
  constructor(balance, amount) {
    super(`Cannot withdraw ${amount}, balance is only ${balance}`);
    this.name = "InsufficientFundsError";
  }
}

function withdraw(balance, amount) {
  if (amount <= 0) {
    throw new Error("Withdrawal amount must be positive");
  }
  if (amount > balance) {
    throw new InsufficientFundsError(balance, amount);
  }
  return balance - amount;
}

// Wrapped in try/catch to handle errors properly
console.log("Starting balance: 500");
try {
  const result = withdraw(500, 900);
  console.log("You will never see this line");
} catch (error) {
  if (error instanceof InsufficientFundsError) {
    console.log(`Error: ${error.message}`);
  } else {
    console.log(`Error: ${error.message}`);
  }
}
