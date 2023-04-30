
function Button(text: any) {

    return (<>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
            {text}
        </button>


    </>
    );
}

export default Button;