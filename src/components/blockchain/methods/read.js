export const getName = async contract => await contract?.methods.name().call();
