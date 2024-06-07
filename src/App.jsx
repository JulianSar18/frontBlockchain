import './App.css'
import Block from "./components/block";
import data from "./mock.json"
function App() {

  return (
    <>
    <h1>{data.length}</h1>
    <div className="cards">{data.map((block, index)=>{
    return  <Block key={index} index={block.index} timeStamp={block.timestamp} previous_hash={block.previous_hash} transactions={block.transactions} nonce={block.nonce} merkle_root={block.merkle_root} current_hash={block.hash} proof_of_work={block.proof_of_work}/>    
    })}</div>
    </>
  )
}

export default App
