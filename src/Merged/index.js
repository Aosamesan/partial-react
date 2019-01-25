import { CounterParam } from '../Counter'
import { TabParam } from '../Tab'
import { PagingParam } from '../Paging'
import { defineController } from '../definer'

defineController([
    CounterParam,
    TabParam,
    PagingParam
])