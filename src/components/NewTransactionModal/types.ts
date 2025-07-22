import { z } from 'zod'

import { newTransactionModalSchema } from './schema'

export type NewTransactionModalInputs = z.infer<
  typeof newTransactionModalSchema
>
