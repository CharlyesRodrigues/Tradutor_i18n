import { useTranslation } from 'react-i18next';

import {LanguageSwitcher} from './components/languages/index'

import './app.css'

function App() {

  const {t} = useTranslation();
  return (
    <div>
    <div className='container'>
      
    <h1>{t("welcome")}</h1>
  
 </div>
<LanguageSwitcher /></div>
  )
}

export default App
