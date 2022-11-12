import type { NextPage } from 'next'
import Sidebar from '@ui/layouts/Sidebar'
import PageHead from '@ui/layouts/PageHead'
import Test from '@common/Test'

const Dashboard: NextPage = () => {
  return (
    <>
      <PageHead />
      <main>
        <Test />
        <Sidebar />
      </main>
    </>
  )
}

export default Dashboard