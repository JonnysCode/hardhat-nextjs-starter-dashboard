/* 
Copyright (c) 2022 by Iddar Olivares (https://codepen.io/iddar/pen/xwXowq)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, 
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or 
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT 
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import styles from './Pacman.module.css'

function Pacman() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-800 md:pl-60">
      <div className="h-16"></div>
      <div className="mx-3 mb-3 block flex-grow rounded-2xl bg-gray-100 dark:bg-gray-900">
        <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center">
          <div className={`${styles.PacMan} bg-slate-400 `} />
        </div>
      </div>
    </div>
  )
}

export default Pacman
