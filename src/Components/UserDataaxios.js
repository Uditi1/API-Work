import React from 'react'

const UserDataaxios = ({users}) => {
  return (
    <>
    {
        users.map((datas) => {
            const {id, name, email, address} = datas
            const {street, city, zipcode} = datas.address
            return(
                <>
                <tr key={id}>
                    <td className='numbers'>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{street}, {city}, {" "} {zipcode}</td>
                </tr>
                </>
            )
        })
       }
    </>
       

  )
}

export default UserDataaxios