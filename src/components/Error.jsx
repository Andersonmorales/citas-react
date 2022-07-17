
function Error({mensaje}) {
    return (
        <div className="bg-red-500 text-white p-3 text-center font-black uppercase rounded mb-8">
            <p>{mensaje}</p>
        </div>
    )
}

export default Error