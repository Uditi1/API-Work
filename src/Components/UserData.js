import React from 'react'

const UserData = ({users}) => {
  return (
    <>
    {
        users.map((curUser) => {
            
            const {id, name, email, address} = curUser
            const {street, city, zipcode} = curUser.address

            return(
                <tr key={id}>
                    <td className='numbers'>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{street} ,{city}, {" "}, {zipcode}</td>
                </tr>
            )
        })
    }</>
  )
}

export default UserData