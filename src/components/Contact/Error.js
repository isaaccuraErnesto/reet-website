const Success = ({ step }) => {
  return (
    <div>
      <form
        id={`contact-form-${step}`}
        className='contact-form'
        style={{
          backgroundColor: 'transparent',
          border: '1px solid #f5f5f5',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '3em' }}>Oops...</h2>
        <div>
          <i
            style={{ fontSize: '4em', color: '#eba69a' }}
            className='fas fa-exclamation-triangle'
          ></i>
        </div>
        <p style={{ fontSize: '1.1em', padding: '1em' }}>
          We apologise but something went wrong.
          <br />
          <br />
          We'll be solving this shortly.
          <br />
          <br />
          For now, please contact us via email or call.
          <br />
          <br />
          Thank you for your understanding and patience!
        </p>
      </form>
    </div>
  )
}

export default Success
