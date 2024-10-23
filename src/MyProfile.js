import React from 'react'
import InfoCard from './components/InfoCard'

function MyProfile() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ textAlign: 'center', width: '50%' }}>
                <InfoCard />
            </div>

        </div>
    )
}

export default MyProfile