import React from 'react'

function November() {
  return (
    <>
      <div className="overflow-x-auto">
        <div className='h-24 md:text-6xl font-bold border-2 border-black flex items-center md:pl-12 bg-yellow-200'>November 2025</div>
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
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_306').showModal()}>1</button>
                    <dialog id="my_modal_306" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">1 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_307').showModal()}>2</button>
                    <dialog id="my_modal_307" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">2 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_308').showModal()}>3</button>
                    <dialog id="my_modal_308" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">3 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_309').showModal()}>4</button>
                    <dialog id="my_modal_309" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">4 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-red-800'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_310').showModal()}>5</button>
                    <dialog id="my_modal_310" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">5 November 2025</h3>
                        <p className="py-4">Guru Nanak Jayanti </p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>
                      <p>Guru Nanak Jayanti</p>
                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_311').showModal()}>6</button>
                    <dialog id="my_modal_311" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">6 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_312').showModal()}>7</button>
                    <dialog id="my_modal_312" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">7 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_313').showModal()}>8</button>
                    <dialog id="my_modal_313" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">8 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_314').showModal()}>9</button>
                    <dialog id="my_modal_314" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">9 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_315').showModal()}>10</button>
                    <dialog id="my_modal_315" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">10 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_316').showModal()}>11</button>
                    <dialog id="my_modal_316" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">11 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_317').showModal()}>12</button>
                    <dialog id="my_modal_317" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">12 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_318').showModal()}>13</button>
                    <dialog id="my_modal_318" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">13 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_319').showModal()}>14</button>
                    <dialog id="my_modal_319" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">14 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_320').showModal()}>15</button>
                    <dialog id="my_modal_320" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">15 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_321').showModal()}>16</button>
                    <dialog id="my_modal_321" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">16 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_322').showModal()}>17</button>
                    <dialog id="my_modal_322" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">17 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_323').showModal()}>18</button>
                    <dialog id="my_modal_323" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">18 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_324').showModal()}>19</button>
                    <dialog id="my_modal_324" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">19 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md;w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_325').showModal()}>20</button>
                    <dialog id="my_modal_325" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">20 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_326').showModal()}>21</button>
                    <dialog id="my_modal_326" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">21 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_327').showModal()}>22</button>
                    <dialog id="my_modal_327" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">22 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_328').showModal()}>23</button>
                    <dialog id="my_modal_328" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">23 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_329').showModal()}>24</button>
                    <dialog id="my_modal_329" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">24 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_330').showModal()}>25</button>
                    <dialog id="my_modal_330" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">25 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32  md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_331').showModal()}>26</button>
                    <dialog id="my_modal_331" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">26 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_332').showModal()}>27</button>
                    <dialog id="my_modal_332" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">27 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_333').showModal()}>28</button>
                    <dialog id="my_modal_333" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">28 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_334').showModal()}>29</button>
                    <dialog id="my_modal_334" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">29 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>

            </tr>
            {/* row 6 */}
            <tr>
              <th className='md:h-32 md:w-32 bg-red-400 md:text-4xl border-2 border-black hover:bg-red-800'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_335').showModal()}>30</button>
                    <dialog id="my_modal_335" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">30 November 2025</h3>
                        <p className="py-4"></p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl  '></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2'></th>
              <th className='md:h-32 md:w-32  md:text-4xl '></th>
              <th className='md:h-32 md:w-32 md:text-4xl'></th>
              <th className='md:h-32 md:w-32 md:text-4xl'></th>
              <th className='md:h-32 md:w-32 md:text-4xl'></th>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default November