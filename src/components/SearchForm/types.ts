import { z } from 'zod'

import { searchFormSchema } from './schema'

export type SearchFormInputs = z.infer<typeof searchFormSchema>
