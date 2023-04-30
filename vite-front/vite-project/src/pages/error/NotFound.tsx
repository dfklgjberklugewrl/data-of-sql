

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">页面不存在哦！,请重新寻找！！！！</p>
      <a href="/" className="text-blue-500 hover:underline">返回首页</a>
    </div>
  );
}

export default NotFound;