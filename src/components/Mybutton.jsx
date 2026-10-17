{/*creamoms un componenete usando arrow function */}

export const Mybutton = ({Espeligroso}) => {
    return (
        <button
        style={{ 
            backgroundColor: Espeligroso ? 'red' : 'green',
            color: 'white', 
            padding: '10px 20px',
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
    
        }}
        >
            {Espeligroso ? 'metelo preso' : 'dedjaloo en livertad'}   
        </button>
    )
}