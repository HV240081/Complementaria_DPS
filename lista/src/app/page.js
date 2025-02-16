import styles from "./page.module.css";
import Form from "@/components/Form";

export default function Home() { 
  return ( 
    <main className={styles.main}> 
      <div className="App"> 
        <div>
          <h3>Bienvenido al registro de productos</h3> 
          <br></br>
          <p> 
            <h5>Favor llene los siguientes campos: </h5>
            <br></br>
            <br></br>
          </p>
          <Form />     
        </div>     
      </div> 
    </main> 
  ); 
}