import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div>
      <div>
        <ul>
            <Link href={'/'}><li>Home</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default navbar
