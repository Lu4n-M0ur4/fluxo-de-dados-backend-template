import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts, carros } from './database'
import { ACCOUNT_TYPE, MODELO_CARRO, TAccount } from './types'
import { error } from 'console'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log('Servidor rodando na porta 3003')
})

app.get('/accounts', (req: Request, res: Response) => {
  res.send(accounts)
})

app.get('/accounts/:id', (req: Request, res: Response): void => {
  try {
    const id: string = req.params.id
    const result: TAccount = accounts.find((account) => account.id === id)

    if (!result) {
      res.statusCode = 404
      throw new Error("Conta não encontrada. Verifique o 'id'")
    }

    res.status(200).send(result)
  } catch (error) {
    if (error instanceof Error) res.send(error.message)
  }
})

app.delete('/accounts/:id', (req: Request, res: Response): void => {
  try {
    const id: string = req.params.id
    //id.startWith("a") metodo de string para verificar se comeca com a letra a
    if (id[0] !== 'a') {
      res.statusCode = 400
      throw new Error("'id' invalido. Deve iniciar com letra 'a'.")
    }

    const accountIndex: number = accounts.findIndex(
      (account) => account.id === id,
    )

    if (accountIndex >= 0) {
      accounts.splice(accountIndex, 1)
    }

    res.status(200).send('Item deletado com sucesso')
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message)
    }
  }
})

app.put('/accounts/:id', (req: Request, res: Response): void => {
  try {
    const id: string = req.params.id
    
    const newId = req.body.id as string | undefined
    const newOwnerName = req.body.ownerName as string | undefined
    const newBalance = req.body.balance as number | undefined
    const newType = req.body.type as ACCOUNT_TYPE | undefined
    
        if (!newId.startsWith("a")) {
          res.statusCode = 400
          throw new Error("'id' invalido. Deve iniciar com letra 'a'.")
        }
    
    if (typeof newOwnerName !== 'string' ||  newOwnerName.length < 2) {
      res.statusCode = 400
      throw new Error("newOwnerName precisa uma string e ter 2 ou mais caracteres")
    }

    if (typeof newBalance !== 'number' || newBalance < 0) {
      res.statusCode = 404
      throw new Error("NewBalance deve ser do tipo 'number' e maior que '0'.")
    }

    if (
      newType !== ACCOUNT_TYPE.BLACK &&
      newType !== ACCOUNT_TYPE.GOLD &&
      newType !== ACCOUNT_TYPE.PLATINUM
    ) {
      res.statusCode = 404
      throw new Error('NewType precisa ser do tipo ACCOUNT_TYPE')
    }

    const account: TAccount | undefined = accounts.find(
      (account) => account.id === id,
    )

    if (account) {
      account.id = newId || account.id
      account.ownerName = newOwnerName || account.ownerName
      account.type = newType || account.type

      account.balance = isNaN(newBalance) ? account.balance : newBalance
    }

    res.status(200).send('Atualização realizada com sucesso')
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message)
    }
  }
})

// exercicioTemplate

app.get('/carros', (req: Request, res: Response) => {
  res.status(200).send(carros)
})

app.get('/carros/:id', (req: Request, res: Response) => {
  const id = req.params.id

  const carrosById = carros.find((carro) => carro.id === id)

  res.status(200).send(carrosById)
})

app.delete('/carros/:id', (req: Request, res: Response) => {
  const id = req.params.id

  const carrosIndex = carros.findIndex((carro) => carro.id === id)

  if (carrosIndex >= 0) {
    carros.splice(carrosIndex, 1)
  }

  res.status(200).send('carro deletado com sucesso')
})

app.put('/carros/:id', (req: Request, res: Response) => {
  const id = req.params.id

  const newCarroById = req.body.id as string | undefined
  const newCarroName = req.body.carName as string | undefined
  const newMarca = req.body.marca as string | undefined
  const newCarroType = req.body.modelo as MODELO_CARRO | undefined

  const carro = carros.find((carro) => carro.id === id)

  if (carro) {
    carro.id = newCarroById || carro.id
    carro.carName = newCarroName || carro.carName
    carro.marca = newMarca || carro.marca
    carro.modelo = newCarroType || carro.modelo
  }

  res.status(200).send('Atualização realizada com sucesso')
})
