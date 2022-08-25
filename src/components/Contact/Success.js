const Success = ({ values, step }) => {
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
        <h2 style={{ fontSize: '3em' }}>Success!</h2>
        <div>
          <i
            style={{ fontSize: '4em', color: '#9aeba6' }}
            className='fa-regular fa-circle-check'
          ></i>
        </div>
        <p style={{ fontSize: '1.1em', padding: '1em' }}>
          Thank you for getting in touch with us,{' '}
          <span style={{ color: '#9aeba6' }}>{values.name}</span>!<br />
          <br />
          We'll be in touch with you shortly.
        </p>
      </form>
    </div>
  )
}

export default Success
