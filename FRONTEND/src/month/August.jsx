import React from 'react'

function August() {
  return (
    <>
      <div className="overflow-x-auto">
        <div className='h-24 md:text-6xl font-bold border-2 border-black flex items-center md:pl-12 bg-yellow-200'>August 2025</div>
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
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_214').showModal()}>1</button>
                    <dialog id="my_modal_214" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">1 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_215').showModal()}>2</button>
                    <dialog id="my_modal_215" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">2 August 2025</h3>
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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_216').showModal()}>3</button>
                    <dialog id="my_modal_216" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">3 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_217').showModal()}>4</button>
                    <dialog id="my_modal_217" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">4 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_218').showModal()}>5</button>
                    <dialog id="my_modal_218" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">5 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_219').showModal()}>6</button>
                    <dialog id="my_modal_219" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">6 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_220').showModal()}>7</button>
                    <dialog id="my_modal_220" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">7 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_221').showModal()}>8</button>
                    <dialog id="my_modal_221" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">8 August 2025</h3>
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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_222').showModal()}>9</button>
                    <dialog id="my_modal_222" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">9 August 2025</h3>
                        <p className="py-4">Rakshabandhan</p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>
                      <p>Rakshabandhan</p>
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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_223').showModal()}>10</button>
                    <dialog id="my_modal_223" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">10 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_224').showModal()}>11</button>
                    <dialog id="my_modal_224" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">11 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_225').showModal()}>12</button>
                    <dialog id="my_modal_225" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">12 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_226').showModal()}>13</button>
                    <dialog id="my_modal_226" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">13 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_227').showModal()}>14</button>
                    <dialog id="my_modal_227" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">14 August 2025</h3>
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
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black hover:bg-red-800'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_228').showModal()}>15</button>
                    <dialog id="my_modal_228" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">15 August 2025</h3>
                        <p className="py-4">Indian Independence Day</p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>
                      <p>Indian Independence Day</p>
                  </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_229').showModal()}>16</button>
                    <dialog id="my_modal_229" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">16 August 2025</h3>
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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_230').showModal()}>17</button>
                    <dialog id="my_modal_230" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">17 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_231').showModal()}>18</button>
                    <dialog id="my_modal_231" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">18 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_232').showModal()}>19</button>
                    <dialog id="my_modal_232" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">19 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_233').showModal()}>20</button>
                    <dialog id="my_modal_233" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">20 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_234').showModal()}>21</button>
                    <dialog id="my_modal_234" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">21 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_235').showModal()}>22</button>
                    <dialog id="my_modal_235" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">22 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_236').showModal()}>23</button>
                    <dialog id="my_modal_236" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">23 August 2025</h3>
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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_237').showModal()}>24</button>
                    <dialog id="my_modal_237" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">24 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_238').showModal()}>25</button>
                    <dialog id="my_modal_238" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">25 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_239').showModal()}>26</button>
                    <dialog id="my_modal_239" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">26 August 2025</h3>
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
              <th className='md:h-32 md:w-32  md:text-4xl border-2 border-black hover:bg-red-800'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_240').showModal()}>27</button>
                    <dialog id="my_modal_240" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">27 August 2025</h3>
                        <p className="py-4">Shri Ganesh Chaturthi</p>

                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <div className='text-xl md:pl-2 text-white'>
                      <p>Shri Ganesh Chaturthi</p>
                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_241').showModal()}>28</button>
                    <dialog id="my_modal_241" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">28 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_242').showModal()}>29</button>
                    <dialog id="my_modal_242" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">29 August 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_243').showModal()}>30</button>
                    <dialog id="my_modal_243" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">30 August 2025</h3>
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
            <tr>
              <th className='md:h-32 md:w-32 bg-red-400 md:text-4xl border-2 border-black hover:bg-red-800'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_244').showModal()}>31</button>
                    <dialog id="my_modal_244" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">31 August 2025</h3>
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
          </tbody>
        </table>
      </div>
    </>
  )
}

export default August