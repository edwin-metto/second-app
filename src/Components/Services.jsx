import { Link, Routes,Route } from 'react-router-dom'

function Web(){

}
function Mobile (){

}
function Services() {
  return (
    <div>
        <Link to ="web">web development</Link>
        <Link to ="mobile">mobile development</Link>
        <Routes>
            <Route path='web' element={<Web/>}/>
            <Route path='mobile' element={<Mobile/>}/>
        </Routes>

    </div>
  )
}

export default Services