import '@styles/global.css'

export const metadata = {
    title: 'Promptopia',
    descripiton: 'Discover & share AI prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'> 
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;