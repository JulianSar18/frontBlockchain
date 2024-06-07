import './block.css'
// eslint-disable-next-line react/prop-types
export default function Block({index, timeStamp, previous_hash, transactions, nonce, merkle_root, current_hash, proof_of_work}) {
    return(
        
        <div className="Block">
            <div >
                <p>Block</p>
                <input  type="text" value={index} disabled/>
            </div>
            <div >
                <p>Timestamp</p>
                <input  type="text" value={timeStamp} disabled/>
            </div>
            <div >
                <p>Previous Hash</p>
                <input  type="text" value={previous_hash} disabled/>
            </div>
            <div >
                <p>Transactions</p>
                <textarea disabled value={JSON.stringify(transactions)}/>
            </div>
            <div >
                <p>nonce</p>
                <input  type="text" value={nonce} disabled/>
            </div>
            <div >
                <p>Merkle Root</p>
                <input  type="text" value={merkle_root} disabled/>
            </div>
            <div >
                <p>Current Hash</p>
                <input  type="text" value={current_hash} disabled/>
            </div>
            <div >
                <p>Proof Of Work</p>
                <input  type="text" value={proof_of_work} disabled/>
            </div>
        </div>

    )
}