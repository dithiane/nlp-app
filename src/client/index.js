import { formatData } from './js/dataCollector'
import { handleSubmit } from './js/formHandler'
import { postData } from './js/postData'
import { injectData } from './js/dataFormatter'
import { loadHistory } from './js/dataRetriever'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/colors.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

loadHistory()

export { formatData, handleSubmit, postData, injectData, loadHistory }
