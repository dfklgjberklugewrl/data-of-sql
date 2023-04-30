import { useContext } from 'react';
import { AppContext } from '../../App';

function Navbar() {
  const { isExpanded, toggleExpanded, isDarkMode, toggleDarkMode } = useContext(AppContext)!;

  return (
    <nav
    className={`fixed inset-x-0 top-0 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} p-4 z-10 relative`}
  >
      <div className="flex justify-between items-center max-w-screen-lg mx-auto">
        {/* Logo */}
        <a href="#" className="font-bold text-lg"><img src='https://www.gzasc.edu.cn/uploadfiles/2021/04/20210428005255362.png?bG9nbyDkuqTkupIucG5n' alt='图片加载失败'/></a>
        {/* 控制菜单按钮 */}
        <button className="block sm:hidden" onClick={toggleExpanded}>
          <svg
            className={`w-6 h-6 `}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* 导航链接 */}
        <ul className={`sm:flex ${isExpanded ? 'block' : 'hidden'}`}>
          <li>
            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 sm:ml-4 hover:text-gray-300" onClick={toggleExpanded}>
              部门
            </a>
          </li>
          <li>
            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 sm:ml-4 hover:text-gray-300" onClick={toggleExpanded}>
              课程
            </a>
          </li>
          <li>
            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 sm:ml-4 hover:text-gray-300" onClick={toggleExpanded}>
              分数
            </a>
          </li>
          <li>
            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 sm:ml-4 hover:text-gray-300" onClick={toggleExpanded}>
              任务
            </a>
          </li>
        </ul>
        {/* 控制夜间模式按钮 */}
        <button className="ml-4" onClick={toggleDarkMode}>
          <svg
            className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isDarkMode ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 12a5 5 0 01-5 5m5-5a5 5 0 00-5-5M7 12a5 5 0 01 5-5m-5 5a5 5 0 005 5m7-7a7 7 0 01-7 7m7-7a7 7 0 00-7-7v14a7 7 0 007-7z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12a8 8 0 018-8m0 16a8 8 0 018-8m-8 8a8 8 0 00-8-8v0a8 8 0 008 8z"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;