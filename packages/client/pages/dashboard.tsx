import type { NextPage } from 'next'
import Sidebar from '@ui/layouts/Sidebar'
import PageHead from '@ui/layouts/PageHead'

const Dashboard: NextPage = () => {
  return (
    <>
      <PageHead />
      <main>
        <Sidebar />
      </main>
    </>
  )
}

export default Dashboard