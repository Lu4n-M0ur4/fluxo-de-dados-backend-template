export enum ACCOUNT_TYPE {
    GOLD = "Ouro",
    PLATINUM = "Platina",
    BLACK = "Black"
}

export type TAccount = {
    id: string,
    ownerName: string,
    balance: number,
    type: ACCOUNT_TYPE
}


export enum MODELO_CARRO {
    SEDAN = "sedan",
    SUV = "suv",
    RET = "ret"
  };

 export type TCarro = {
    id: string;
    carName: string;
    marca: string;
    modelo: MODELO_CARRO;
  }