import React from 'react'

function May() {
  return (
    <>
        <div className="overflow-x-auto">
        <div className='p-6 md:text-6xl font-bold border-2 border-black flex items-center md:pl-12 bg-yellow-200'>May 2025</div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th className='md:h-32 md:w-32 md:text-4xl text-white bg-red-400 border-2 border-black'>Sunday</th>
              <th className='md:h-32 md:w-32 md:text-4xl bg-base-300 border-2 border-black'>Monday</th>
              <th className='md:h-32 md:w-32 md:text-4xl bg-base-300 border-2 border-black'>Tuesday</th>
              <th className='md:h-32 md:w-32 md:text-4xl bg-base-300 border-2 border-black'>Wenusday</th>
              <th className='md:h-32 md:w-32 md:text-4xl bg-base-300 border-2 border-black'>Thursday</th>
              <th className='md:h-32 md:w-32 md:text-4xl bg-base-300 border-2 border-black'>Friday</th>
              <th className='md:h-32 md:w-32 md:text-4xl bg-base-300 border-2 border-black'>Saterday</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th className='md:h-32 md:w-32 md:text-4xl bg-red-400 border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-red-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_122').showModal()}>1</button>
                <dialog id="my_modal_122" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">1 May 2025</h3>
                    <p className="py-4">Maharashtra Day</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Maharashtra Day</p>
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_123').showModal()}>2</button>
                <dialog id="my_modal_123" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">2 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_124').showModal()}>3</button>
                <dialog id="my_modal_124" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">3 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th className='md:h-32 md:w-32 bg-red-400 md:text-4xl border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_125').showModal()}>4</button>
                <dialog id="my_modal_125" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">4 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_126').showModal()}>5</button>
                <dialog id="my_modal_126" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">5 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_127').showModal()}>6</button>
                <dialog id="my_modal_127" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">6 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_128').showModal()}>7</button>
                <dialog id="my_modal_128" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">7 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_129').showModal()}>8</button>
                <dialog id="my_modal_129" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">8 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_130').showModal()}>9</button>
                <dialog id="my_modal_130" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">9 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_131').showModal()}>10</button>
                <dialog id="my_modal_131" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">10 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th className='md:h-32 md:w-32 bg-red-400 md:text-4xl border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_132').showModal()}>11</button>
                <dialog id="my_modal_132" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">11 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_133').showModal()}>12</button>
                <dialog id="my_modal_133" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">12 May 2025</h3>
                    <p className="py-4">Buddha Purnima</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Buddha Purnima</p>
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_134').showModal()}>13</button>
                <dialog id="my_modal_134" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">13 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_135').showModal()}>14</button>
                <dialog id="my_modal_135" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">14 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_136').showModal()}>15</button>
                <dialog id="my_modal_136" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">15 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_137').showModal()}>16</button>
                <dialog id="my_modal_137" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">16 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_138').showModal()}>17</button>
                <dialog id="my_modal_138" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">17 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>

            </tr>
            {/* row 4 */}
            <tr>
              <th className='md:h-32  md:w-32 bg-red-400 md:text-4xl border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_139').showModal()}>18</button>
                <dialog id="my_modal_139" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">18 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_140').showModal()}>19</button>
                <dialog id="my_modal_140" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">19 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_141').showModal()}>20</button>
                <dialog id="my_modal_141" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">20 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_142').showModal()}>21</button>
                <dialog id="my_modal_142" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">21 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md;w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_143').showModal()}>22</button>
                <dialog id="my_modal_143" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">22 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_144').showModal()}>23</button>
                <dialog id="my_modal_144" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">23 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_145').showModal()}>24</button>
                <dialog id="my_modal_145" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">24 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>

            </tr>
            {/* row 5 */}
            <tr>
              <th className='md:h-32 md:w-32 bg-red-400 md:text-4xl border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_146').showModal()}>25</button>
                <dialog id="my_modal_146" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">25 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_147').showModal()}>26</button>
                <dialog id="my_modal_147" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">26 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_148').showModal()}>27</button>
                <dialog id="my_modal_148" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">27 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32  md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_149').showModal()}>28</button>
                <dialog id="my_modal_149" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">28 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_150').showModal()}>29</button>
                <dialog id="my_modal_150" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">29 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_151').showModal()}>30</button>
                <dialog id="my_modal_151" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">30 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_152').showModal()}>31</button>
                <dialog id="my_modal_15  bg-red-600 text-white2" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">31 May 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default May