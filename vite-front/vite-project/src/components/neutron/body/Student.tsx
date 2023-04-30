
const student = () => {
    return (

        <div>
            <div className="flex justify-center items-center">
                <div>
                    <p className="text-gray-500 font-bold">学生</p>
                </div>
                <div className="flex items-center ml-2">
                    <div className="flex justify-center items-center flex-wrap">
                        <div className="flex flex-col items-center w-48 h-48 bg-gray-100 m-4">
                            <h2 className="font-bold text-lg mb-2">介绍框 1</h2>
                            <p className="text-gray-500">这是介绍框 1 的描述。</p>
                        </div>
                        <div className="flex flex-col items-center w-48 h-48 bg-gray-100 m-4">
                            <h2 className="font-bold text-lg mb-2">介绍框 2</h2>
                            <p className="text-gray-500">这是介绍框 2 的描述。</p>
                        </div>
                        <div className="flex flex-col items-center w-48 h-48 bg-gray-100 m-4">
                            <h2 className="font-bold text-lg mb-2">介绍框 3</h2>
                            <p className="text-gray-500">这是介绍框 3 的描述。</p>
                        </div>
                        <div className="flex flex-col items-center w-48 h-48 bg-gray-100 m-4">
                            <h2 className="font-bold text-lg mb-2">介绍框 4</h2>
                            <p className="text-gray-500">这是介绍框 4 的描述。</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default student
