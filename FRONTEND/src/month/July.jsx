import React from 'react'

function July() {
  return (
    <>
      <div className="overflow-x-auto">
        <div className='h-24 md:text-6xl font-bold border-2 border-black flex items-center md:pl-12 hover:bg-blue-900 bg-yellow-200'>July 2025</div>
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
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_183').showModal()}>1</button>
                    <dialog id="my_modal_183" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">1 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_184').showModal()}>2</button>
                    <dialog id="my_modal_184" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">2 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_185').showModal()}>3</button>
                    <dialog id="my_modal_185" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">3 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_186').showModal()}>4</button>
                    <dialog id="my_modal_186" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">4 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_187').showModal()}>5</button>
                    <dialog id="my_modal_187" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">5 july 2025</h3>
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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_188').showModal()}>6</button>
                    <dialog id="my_modal_188" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">6 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_189').showModal()}>7</button>
                    <dialog id="my_modal_189" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">7 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_190').showModal()}>8</button>
                    <dialog id="my_modal_190" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">8 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_191').showModal()}>9</button>
                    <dialog id="my_modal_191" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">9 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_192').showModal()}>10</button>
                    <dialog id="my_modal_192" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">10 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_193').showModal()}>11</button>
                    <dialog id="my_modal_193" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">11 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_194').showModal()}>12</button>
                    <dialog id="my_modal_194" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">12 july 2025</h3>
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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_195').showModal()}>13</button>
                    <dialog id="my_modal_195" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">13 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_196').showModal()}>14</button>
                    <dialog id="my_modal_196" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">14 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_197').showModal()}>15</button>
                    <dialog id="my_modal_197" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">15 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_198').showModal()}>16</button>
                    <dialog id="my_modal_198" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">16 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_199').showModal()}>17</button>
                    <dialog id="my_modal_199" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">17 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_200').showModal()}>18</button>
                    <dialog id="my_modal_200" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">18 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_201').showModal()}>19</button>
                    <dialog id="my_modal_201" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">19 july 2025</h3>
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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_202').showModal()}>20</button>
                    <dialog id="my_modal_202" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">20 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_203').showModal()}>21</button>
                    <dialog id="my_modal_203" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">21 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_204').showModal()}>22</button>
                    <dialog id="my_modal_204" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">22 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_205').showModal()}>23</button>
                    <dialog id="my_modal_205" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">23 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_206').showModal()}>24</button>
                    <dialog id="my_modal_206" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">24 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_207').showModal()}>25</button>
                    <dialog id="my_modal_207" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">25 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_208').showModal()}>26</button>
                    <dialog id="my_modal_208" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">26 july 2025</h3>
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
                    <button className="btn md:text-4xl  bg-red-600 text-white" onClick={() => document.getElementById('my_modal_209').showModal()}>27</button>
                    <dialog id="my_modal_209" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">27 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_210').showModal()}>28</button>
                    <dialog id="my_modal_210" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">28 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_211').showModal()}>29</button>
                    <dialog id="my_modal_211" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">29 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_212').showModal()}>30</button>
                    <dialog id="my_modal_212" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">30 july 2025</h3>
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
                    <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_213').showModal()}>31</button>
                    <dialog id="my_modal_213" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg md:text-5xl text-red-800">31 july 2025</h3>
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
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default July