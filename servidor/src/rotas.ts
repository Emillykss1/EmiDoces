import { Router } from "express";
import { prisma } from "./prisma";

export const rotas = Router()

rotas.get('/', async (req, res) => {
  const doces = await prisma.doceria.findMany()
  res.json(doces)
})


rotas.post('/create', async (req, res) => { 
   const{nome, tipodoce, tiposalgado, bebida, tamanhodoce, observacao} = req.body 

   const doceTipo = await prisma.doceria.create({
   data:{
    nome:nome,
    tipodoce:tipodoce,
    tiposalgado:tiposalgado,
    bebida: bebida,
    tamanhodoce:tamanhodoce,
    observacao:observacao
   }

   
}) 
res.json(doceTipo)

})
rotas.delete('/delete/:id', async (req, res) => { 
    const {id} = req.params
    const deletarDoces = await prisma.doceria.delete({
        where: {
            id: id
        }
    })
    res.json("dado apagado!")
})

rotas.put('/edit/:id', async (req, res) => {
    const {id} = req.params
    const {tamanhodoce} = req.body
    const editarDoces = await prisma.doceria.update({
        where:{
            id: id
        },
        data: {
            tamanhodoce: tamanhodoce
        }
    })
    res.json("Editado")
 })

