function Footer(props) {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 15
  };

  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2021</em>
    </div>
  );
}

export default Footer;