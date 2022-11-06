const getBalance = async (library, account) => {
  return library?.eth?.getBalance(account);
};

export default getBalance;
