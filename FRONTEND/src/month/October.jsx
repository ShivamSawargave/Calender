import React from 'react'

function October() {
  return (
    <div className="overflow-x-auto">
      <div className='h-24 md:text-6xl font-bold border-2 border-black flex items-center md:pl-12 bg-yellow-200'>October 2025</div>
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
            <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_275').showModal()}>1</button>
                  <dialog id="my_modal_275" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">1 October 2025</h3>
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
                  <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_276').showModal()}>2</button>
                  <dialog id="my_modal_276" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">2 October 2025</h3>
                      <p className="py-4">Mahatma Gandhi birth aniversary</p>
                      <p>Dassera</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
                <div className='text-xl md:pl-2 text-white'>
                    <p>Mahatma Gandhi birth aniversary</p>
                </div>
              </div>
            </th>
            <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_277').showModal()}>3</button>
                  <dialog id="my_modal_277" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">3 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_278').showModal()}>4</button>
                  <dialog id="my_modal_278" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">4 October 2025</h3>
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
                  <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_279').showModal()}>5</button>
                  <dialog id="my_modal_279" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">5 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_280').showModal()}>6</button>
                  <dialog id="my_modal_280" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">6 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_281').showModal()}>7</button>
                  <dialog id="my_modal_281" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">7 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_282').showModal()}>8</button>
                  <dialog id="my_modal_282" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">8 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_283').showModal()}>9</button>
                  <dialog id="my_modal_283" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">9 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_284').showModal()}>10</button>
                  <dialog id="my_modal_284" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">10 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_285').showModal()}>11</button>
                  <dialog id="my_modal_285" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">11 October 2025</h3>
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
                  <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_286').showModal()}>12</button>
                  <dialog id="my_modal_286" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">12 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_287').showModal()}>13</button>
                  <dialog id="my_modal_287" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">13 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_288').showModal()}>14</button>
                  <dialog id="my_modal_288" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">14 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_289').showModal()}>15</button>
                  <dialog id="my_modal_289" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">15 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_290').showModal()}>16</button>
                  <dialog id="my_modal_290" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">16 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_291').showModal()}>17</button>
                  <dialog id="my_modal_291" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">17 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_292').showModal()}>18</button>
                  <dialog id="my_modal_292" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">18 October 2025</h3>
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
                  <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_293').showModal()}>19</button>
                  <dialog id="my_modal_293" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">19 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_294').showModal()}>20</button>
                  <dialog id="my_modal_294" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">20 October 2025</h3>
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
                  <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_295').showModal()}>21</button>
                  <dialog id="my_modal_295" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">21 October 2025</h3>
                      <p className="py-4">Lakshmi pujan</p>

                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
                <div className='text-xl md:pl-2 text-white'>
                    <p>Lakshmi Pujan</p>
                </div>
              </div>
            </th>
            <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_296').showModal()}>22</button>
                  <dialog id="my_modal_296" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">22 October 2025</h3>
                      <p className="py-4">Diwali</p>

                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
                <div className='text-xl md:pl-2 text-white'>
                      <p>Diwali</p>
                </div>
              </div>
            </th>
            <th className='md:h-32 md;w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_297').showModal()}>23</button>
                  <dialog id="my_modal_297" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">23 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_298').showModal()}>24</button>
                  <dialog id="my_modal_298" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">24 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_299').showModal()}>25</button>
                  <dialog id="my_modal_299" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">25 October 2025</h3>
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
                  <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_300').showModal()}>26</button>
                  <dialog id="my_modal_300" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">26 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_301').showModal()}>27</button>
                  <dialog id="my_modal_301" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">27 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_302').showModal()}>28</button>
                  <dialog id="my_modal_302" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">28 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_303').showModal()}>29</button>
                  <dialog id="my_modal_303" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">29 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_304').showModal()}>30</button>
                  <dialog id="my_modal_304" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">30 October 2025</h3>
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
                  <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_305').showModal()}>31</button>
                  <dialog id="my_modal_305" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg md:text-5xl text-red-800">31 October 2025</h3>
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
            <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default October