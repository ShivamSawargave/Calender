import React from 'react'

function September() {
  return (
    <>
      <div className="overflow-x-auto">
        <div className='h-24 md:text-6xl font-bold border-2 border-black flex items-center md:pl-12 hover:bg-blue-900 bg-yellow-200'>September 2025</div>
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
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_245').showModal()}>1</button>
                    <dialog id="my_modal_245" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">1 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_246').showModal()}>2</button>
                    <dialog id="my_modal_246" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">2 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_247').showModal()}>3</button>
                    <dialog id="my_modal_247" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">3 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_248').showModal()}>4</button>
                    <dialog id="my_modal_248" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">4 september 2025</h3>
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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_249').showModal()}>5</button>
                    <dialog id="my_modal_249" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">5 september 2025</h3>
                        <p className="py-4">Id E-Milad</p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>
                      <p>Id E-Milad</p>
                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_250').showModal()}>6</button>
                    <dialog id="my_modal_250" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">6 september 2025</h3>
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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_251').showModal()}>7</button>
                    <dialog id="my_modal_251" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">7 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_252').showModal()}>8</button>
                    <dialog id="my_modal_252" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">8 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_253').showModal()}>9</button>
                    <dialog id="my_modal_253" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">9 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_254').showModal()}>10</button>
                    <dialog id="my_modal_254" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">10 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_255').showModal()}>11</button>
                    <dialog id="my_modal_255" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">11 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_256').showModal()}>12</button>
                    <dialog id="my_modal_256" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">12 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_257').showModal()}>13</button>
                    <dialog id="my_modal_257" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">13 september 2025</h3>
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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_258').showModal()}>14</button>
                    <dialog id="my_modal_258" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">14 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_259').showModal()}>15</button>
                    <dialog id="my_modal_259" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">15 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_260').showModal()}>16</button>
                    <dialog id="my_modal_260" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">16 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_261').showModal()}>17</button>
                    <dialog id="my_modal_261" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">17 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_262').showModal()}>18</button>
                    <dialog id="my_modal_262" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">18 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_263').showModal()}>19</button>
                    <dialog id="my_modal_263" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">19 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_264').showModal()}>20</button>
                    <dialog id="my_modal_264" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">20 september 2025</h3>
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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_265').showModal()}>21</button>
                    <dialog id="my_modal_265" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">21 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_266').showModal()}>22</button>
                    <dialog id="my_modal_266" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">22 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_267').showModal()}>23</button>
                    <dialog id="my_modal_267" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">23 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_268').showModal()}>24</button>
                    <dialog id="my_modal_268" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">24 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_269').showModal()}>25</button>
                    <dialog id="my_modal_269" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">25 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_270').showModal()}>26</button>
                    <dialog id="my_modal_270" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">26 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_271').showModal()}>27</button>
                    <dialog id="my_modal_271" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">27 september 2025</h3>
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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_272').showModal()}>28</button>
                    <dialog id="my_modal_272" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">28 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_273').showModal()}>29</button>
                    <dialog id="my_modal_273" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">29 september 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_274').showModal()}>30</button>
                    <dialog id="my_modal_274" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">30 september 2025</h3>
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
              <th className='md:h-32 md:w-32  md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default September