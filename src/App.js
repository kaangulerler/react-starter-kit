import styles from './App.module.css'
import Test from './Test'
import {useEffect} from "react";
function App() {

      useEffect(() => {
          console.log(styles)
          if (process.env.NODE_ENV === 'production'){
              //analytic bilgilendirmesi yapar
          }
      }, [])

    return (
    <div className="styles.app">
        <Test />
    </div>
  );
}

export default App