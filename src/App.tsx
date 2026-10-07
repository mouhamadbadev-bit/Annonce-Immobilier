import  './index.css'
import UserProfile from './hook/userFetch';
import Liste from './componente/list';



function App() {

const {immobili, error, loading} = UserProfile()

  return (
    <>
    <div>

    if(loading){
     <p>Loading...</p>
    }
    if(error){
       <p>{error}</p>
    }

  {immobili && !error && !loading && (
  <>
  <div>
    <Liste list={immobili}/>
  </div>
  </>
)}

</div>
    </>
  )
}

export default App
