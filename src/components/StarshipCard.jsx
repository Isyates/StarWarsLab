
const styleObj = {
    fontSize: 22,
    color: "#4a54f1",
    textAlign: "center",
    padding: "100px",
    backgroundColor:"darkgray",
    margin: "20px",
    flexDirection: "row",
    flexWrap: "wrap"
}

export default function StarshipCard(props){



    return(
        <div style={styleObj}>
            
            <h1>{props.name}</h1>
                
                </div>
    )
}