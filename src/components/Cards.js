const Cards = ({name, flag, abbr}) => {
  return (
    <div
    style={{
        border : "1px solid gray",
        width : "200px",
        borderRadius : "10px",
        margin : "10px"
    }}
    >
        <img src={flag} alt={name} width="180px" height="110px" style={{
            margin : "10px",
            boxShadow : "0px 0px 15px rgba(0, 0, 0, 0.48)",
        }}/>
        <h4 style={{
            fontSize: "20px",
            margin:"0px"
        }}>{name}</h4>
    </div>
  )
}

export default Cards