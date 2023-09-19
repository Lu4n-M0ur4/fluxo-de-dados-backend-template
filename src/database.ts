import { ACCOUNT_TYPE, MODELO_CARRO, TAccount, TCarro } from "./types";

export const accounts: TAccount[] = [
    {
        id: "a001",
        ownerName: "Ciclano",
        balance: 10000,
        type: ACCOUNT_TYPE.GOLD
    },
    {
        id: "a002",
        ownerName: "Astrodev",
        balance: 500000,
        type: ACCOUNT_TYPE.BLACK
    },
    {
        id: "a003",
        ownerName: "Fulana",
        balance: 20000,
        type: ACCOUNT_TYPE.PLATINUM
    }
]


export const carros: TCarro[] = [
    {
      id: "c001",
      carName: "Carro 1",
      marca: "Marca A",
      modelo: MODELO_CARRO.SEDAN
    },
    {
      id: "c002",
      carName: "Carro 2",
      marca: "Marca B",
      modelo: MODELO_CARRO.SUV
    },
    {
      id: "c003",
      carName: "Carro 3",
      marca: "Marca C",
      modelo: MODELO_CARRO.RET
    },
    {
      id: "c004",
      carName: "Carro 4",
      marca: "Marca D",
      modelo: MODELO_CARRO.SUV
    },
    {
      id: "c005",
      carName: "Carro 5",
      marca: "Marca E",
      modelo: MODELO_CARRO.RET
    },
    {
      id: "c006",
      carName: "Carro 6",
      marca: "Marca F",
      modelo: MODELO_CARRO.SEDAN
    },
    {
      id: "c007",
      carName: "Carro 7",
      marca: "Marca G",
      modelo: MODELO_CARRO.SUV
    }
  ];