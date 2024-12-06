function App() {
    const alphabets=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
    return (
        <div className="main">
           {alphabets.map((each, index) =>{
            return<Box key={index} letter={each} index={index}/>
           })}
        </div>
      )
}  