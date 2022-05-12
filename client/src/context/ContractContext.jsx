import React, { createContext, useState, useEffect } from 'react'
import ElectionContract from '../contracts/Election.json'
import getWeb3 from '../getWeb3'

export const ContractContext = createContext({
  web3: null,
  electionContract: null,
  electionDetail: {
    title: 'Election Title',
    org: 'Election Org',
    status: '0',
  },
})

export const ContractProvider = (props) => {
  const [web3, setWeb3] = useState(null)
  const [electionContract, setElectionContract] = useState(null)
  const [electionDetail, setElectionDetail] = useState({})

  useEffect(() => {
    const init = async () => {
      try {
        const res = await getWeb3()
        setWeb3(res)

        const networkId = await res.eth.net.getId()
        const deployedNetwork = ElectionContract.networks[networkId]
        const instance = new res.eth.Contract(
          ElectionContract.abi,
          deployedNetwork && deployedNetwork.address
        )

        const r = await instance.methods.getElectionDetails().call()
        setElectionDetail({
          title: r['0'],
          org: r['1'],
          status: r['2'],
        })

        setElectionContract(instance)
      } catch (err) {
        console.log(err)
      }
    }

    init()
  }, [])

  const value = {
    web3,
    electionContract,
    electionDetail,
  }

  return (
    <ContractContext.Provider value={value}>
      {props.children}
    </ContractContext.Provider>
  )
}
