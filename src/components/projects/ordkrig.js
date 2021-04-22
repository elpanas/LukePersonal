import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const OrdKrig = () => {

  return (
    <div>
      <Container>       
          <Row >
            <Col>   
            <h2 style={{textAlignVertical: "center",textAlign: "center",}}><b>Funzione ordkrig per il Kriging ordinario</b></h2>              
            <hr className="my-2" />   
           <p className="justify-content-center"> 
                <p>Scrivere una funzione di octave che calcoli il 
                kriging ordinario in un insieme di punti P con coordinate note (Px, Py).</p>
                <p>Il prototipo della funzione sarà simile (ma non necessariamente uguale) al seguente:</p>                
                <p><code >[pred, var] = ordkrig(D, P, semivarmod, par)</code></p>                
                <p>dove:</p>                
                <ul>
                  <li>
                  D = L’insieme dei valori noti in forma di matrice D [N x 3] dove N = numero dei dati.
                  Per coerenza assumiamo che la 1a colonna di D rappresenti la coordinata x, 
                  la 2a colonna la coordinata y e la 3a colonna il valore z da interpolare.
                  </li>
                  <li>
                  P = L’insieme degli M punti per i quali calcolare il kriging come matrice P [2 x M] 
                  con le coordinate x nella 1a colonna e y nella 2a.
                  </li>
                  <li>
                  semivarmod = modello di semivariogramma e i relativi parametri saranno passati con 
                  l’array “par”. Per generalizzare il più possibile usa un puntatore ad una funzione 
                  semivariogramma esterna. Non è necessario scrivere tutte i possibili modelli di semivariogramma, 
                  per provare la funzione sarà sufficiente usare uno dei modelli visti a lezione.
                  </li>
                </ul>
                <p><code>par = parametri di semivarmod (nugget, range, sill, ecc)</code></p>
                La funzione deve restituire un array “pred” con il valore 
                interpolato nei punti P e un altro array con la loro varianza “var”.
                </p>
                <p>Sperimentare la funzione ottenuta usando un set di dati a piacere fare 
                  un grafico dei dat interpolati e commentare i risultati ottenuti.</p>

                <h4><b>Descrizione</b></h4>
                <hr className="my-2" />

                <p>La funzione ordkrig richiede in input i parametri nugget, sill e range. 
                Quindi, per effettuare un test migliore, ho deciso di ricavarli dal 
                semivariogramma e successivamente usarli nel test della funzione.</p>

                <h5><u>Operazioni preliminari</u></h5>

                <ol>
                  <li>
                  Utilizzo 100 campioni generati casualmente da un programma scritto in C, 
                  contenuti in un file (campioni.dat) costituito da 3 colonne formattate come segue:
                  </li>
                  <li>Genero il semivariogramma per mezzo della funzione Octave “semivariogramma.m”.</li>
                  <li>Analizzo il semivariogramma regolarizzato con un modello parametrico sferico 
                    avente i seguenti valori:
                    <ul>
                      <li>Nugget: 6000</li>
                      <li>Sill: 2000</li>
                      <li>Range: 150</li>
                    </ul>
                  </li>
                </ol>
                <div class="p-3 w-75 text-center">
                  <img src="../images/modellizzazione01.png" className="img-fluid img-thumbnail" alt="50%50" />
                </div>
                <p>
                Effettuo il fitting pesato e verifico che non è necessario effettuare un detrend (μ(x) costante)<br/>
                Proseguo quindi con il kriging ordinario.
                </p>
                </Col>                      
          </Row>
          <hr className="my-2" />          
        </Container>  
    </div>
  );
}

export default OrdKrig;