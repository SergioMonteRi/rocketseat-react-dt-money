import { z } from 'zod'

export const newTransactionModalSchema = z.object({
  description: z.string().min(1, 'Descrição é obrigatória'),

  price: z.number().min(1, 'Preço é obrigatório'),

  category: z.string().min(1, 'Categoria é obrigatória'),

  type: z.enum(['income', 'outcome']),
})
