import React, { useContext, useEffect, useState } from 'react'

import { ContractContext } from '../context/ContractContext'

const ElectionDetails = () => {
  const { electionContract } = useContext(ContractContext)
  const [status, setStatus] = useState('')

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await electionContract.methods
          .getElectionStatus()
          .call()
        setStatus(response)
      } catch (err) {
        console.error(err)
      }
    }

    fetch()
  }, [electionContract])

  return (
    <div>
      <h2 className="fs-2 fw-bold">Details</h2>
      <div className="d-flex flex-column ">
        <div>
          <p className="fs-5">Title : adfjhlkf alkdj alsk</p>
        </div>
        <div>
          <p className="fs-5">Institue : </p>
        </div>
        <div>
          <p className="fs-5">
            Election Status : <span class="badge bg-success"> {status} </span>
          </p>
        </div>
        <div>
          <p className="fs-5">Admin : 0x123413414141233416536</p>
        </div>
        <div>
          <p className="fs-5">Total Votes : 55</p>
        </div>
        <div>
          <p className="fs-5">
            Result Status :{' '}
            <span class="badge bg-warning"> Not Published </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ElectionDetails
