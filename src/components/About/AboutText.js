const AboutText = () => {
  return (
    <div id='about-text'>
      <h2
        style={{
          marginInline: 'auto',
          marginBottom: '2em',
          border: 'solid 7px rgba(141, 139, 139, 0.7)',
          width: 'fit-content',
          padding: '0.2em 1em',
          letterSpacing: '0.5em',
        }}
      >
        About
      </h2>
      <p style={{ margin: 0 }}>
        At Reet we take a fresh approach to property service and maintenance,
        whether it be residential or commercial. We are constantly seeking ways
        to incorporate the industry's latest trends and ideas into our proven
        and tested delivery in order to offer a service dedicated to satisfying
        our clients' needs.
        <br />
        <br />
        Our aim is to provide a headache-free experience for all parts involved,
        allowing our clients to spend more time enjoying the results of their
        projects, regardless of magnitude or significance.
      </p>
    </div>
  );
};

export default AboutText;
