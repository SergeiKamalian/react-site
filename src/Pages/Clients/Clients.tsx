import React from 'react'
import { Link } from 'react-router-dom';
import { ISelfClientProps } from '../../module';
import SelfClient from './SelfClient'

const Clients = () => {
  const dataComments: ISelfClientProps[] = JSON.parse(localStorage.comments);

  return (
    <div className="page">
      <div className="Clients">
        <span className='ClientsTitle'>Happy Clients about us</span>
        <div className="clientsComs">
          {dataComments.map((user) =>
            <Link to={`${user.id}`} style={{ textDecoration: 'none', color: ' #1075bb ' }} key={user.id}>
              <SelfClient userCom={user} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Clients